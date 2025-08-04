import { test, expect } from '@playwright/test';

test.describe('Image Optimization Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the homepage
    await page.goto('/');
  });

  test('site loads successfully with optimized images', async ({ page }) => {
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Pattern Craft/);
    
    // Verify no console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait for network to be idle
    await page.waitForLoadState('networkidle');
    
    // Assert no console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('WebP images are accessible directly', async ({ page, request }) => {
    // Test first few optimized screenshots
    const screenshots = [
      '/snapshots/screenshot-1.webp',
      '/snapshots/screenshot-2.webp', 
      '/snapshots/screenshot-3.webp'
    ];

    for (const screenshot of screenshots) {
      const response = await request.get(screenshot);
      
      // Should return 200 OK
      expect(response.status()).toBe(200);
      
      // Should be WebP format
      expect(response.headers()['content-type']).toBe('image/webp');
      
      // Should be reasonably small (under 100KB for our optimized images)
      const contentLength = parseInt(response.headers()['content-length'] || '0');
      expect(contentLength).toBeLessThan(100 * 1024); // 100KB max
      expect(contentLength).toBeGreaterThan(1000); // At least 1KB (not empty)
    }
  });

  test('page load performance meets targets', async ({ page }) => {
    // Track network activity
    const responses: any[] = [];
    page.on('response', response => {
      responses.push({
        url: response.url(),
        status: response.status(),
        size: response.headers()['content-length'] || '0'
      });
    });

    const startTime = Date.now();
    
    // Navigate and wait for load
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Load time should be under 5 seconds (generous target)
    expect(loadTime).toBeLessThan(5000);
    
    // Check that we're not downloading massive files anymore
    const largeFiles = responses.filter(r => 
      parseInt(r.size) > 1024 * 1024 // Files over 1MB
    );
    
    // Should have no files over 1MB (our images are now <100KB each)
    expect(largeFiles).toHaveLength(0);
  });


  test('mobile performance is acceptable', async ({ page, context }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Emulate slow 3G connection (if supported)
    try {
      await context.route('**/*', async (route) => {
        // Add small delay to simulate slower network
        await new Promise(resolve => setTimeout(resolve, 50));
        await route.continue();
      });
    } catch (error) {
      // Network throttling not supported in this environment, continue without it
      console.log('Network throttling not available, testing without throttling');
    }
    
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Even on mobile/slower connection, should load reasonably fast due to small images
    expect(loadTime).toBeLessThan(10000); // 10 seconds max on mobile
    
    // Verify mobile-specific content is visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    console.log(`📱 Mobile load time: ${loadTime}ms`);
  });

  test('core content renders correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Verify essential page elements are visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Check for main content areas
    const mainContent = page.locator('main, section, .container');
    await expect(mainContent.first()).toBeVisible();
    
    // Verify page has loaded content (not just empty shell)
    const hasContent = await page.evaluate(() => {
      const textContent = document.body.textContent || '';
      return textContent.length > 100; // Page should have substantial content
    });
    expect(hasContent).toBe(true);
    
    // Check that buttons/interactive elements are present
    const buttons = page.locator('button, a[href]');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
    
    console.log(`✅ Page rendered with ${buttonCount} interactive elements`);
  });

  test('responsive design works across devices', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1200, height: 800, name: 'desktop' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // Wait for all content to load and animations to complete
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000); // Additional wait for any animations
      
      // Hide dynamic content that could cause screenshot differences
      await page.addStyleTag({
        content: `
          * {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
          .date, .time, [data-testid*="date"], [data-testid*="time"] {
            display: none !important;
          }
        `
      });
      
      // Should not have horizontal scrollbars
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // Allow 1px tolerance
      
      // Take screenshot for visual regression with higher threshold for cross-platform differences
      await expect(page).toHaveScreenshot(`patterns-${viewport.name}.png`, {
        threshold: 0.15, // Allow up to 15% difference for cross-platform rendering
        maxDiffPixels: 1000 // Allow up to 1000 different pixels
      });
    }
  });
});
