import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { join } from 'path';

test.describe('Performance Benchmarks', () => {
  test('image optimization impact measurement', async ({ page, request }) => {
    // Test all optimized screenshots exist and are properly sized
    const screenshots = Array.from({ length: 21 }, (_, i) => `screenshot-${i + 1}.webp`);
    
    let totalOptimizedSize = 0;
    const imageSizes: { [key: string]: number } = {};
    
    for (const screenshot of screenshots) {
      const response = await request.get(`/snapshots/${screenshot}`);
      expect(response.status()).toBe(200);
      
      const size = parseInt(response.headers()['content-length'] || '0');
      imageSizes[screenshot] = size;
      totalOptimizedSize += size;
      
      // Each optimized image should be under 100KB
      expect(size).toBeLessThan(100 * 1024);
    }
    
    // Total optimized size should be under 2MB (vs original 109MB)
    expect(totalOptimizedSize).toBeLessThan(2 * 1024 * 1024);
    
    // Log results for tracking
    console.log('📊 Image Optimization Results:');
    console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Average image size: ${(totalOptimizedSize / screenshots.length / 1024).toFixed(2)}KB`);
    console.log(`Expected reduction: 99%+ (from 109MB to <2MB)`);
  });

  test('page load speed benchmark', async ({ page }) => {
    const metrics: any[] = [];
    
    // Test multiple page loads to get average
    for (let i = 0; i < 3; i++) {
      const startTime = Date.now();
      
      await page.goto('/', { waitUntil: 'networkidle' });
      
      const loadTime = Date.now() - startTime;
      
      // Get web vitals using browser API
      const webVitals = await page.evaluate(() => {
        return new Promise((resolve) => {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const vitals: any = {};
            
            entries.forEach((entry: any) => {
              if (entry.name === 'first-contentful-paint') {
                vitals.fcp = entry.value;
              }
              if (entry.name === 'largest-contentful-paint') {
                vitals.lcp = entry.value;
              }
            });
            
            // Get navigation timing
            const nav = performance.getEntriesByType('navigation')[0] as any;
            vitals.domContentLoaded = nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart;
            vitals.loadComplete = nav.loadEventEnd - nav.loadEventStart;
            
            resolve(vitals);
          }).observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
          
          // Fallback timeout
          setTimeout(() => resolve({}), 5000);
        });
      });
      
      metrics.push({
        run: i + 1,
        totalLoadTime: loadTime,
        ...webVitals
      });
      
      // Clear cache between runs
      await page.context().clearCookies();
    }
    
    // Calculate averages
    const avgLoadTime = metrics.reduce((sum, m) => sum + m.totalLoadTime, 0) / metrics.length;
    
    // Performance targets
    expect(avgLoadTime).toBeLessThan(3000); // Under 3 seconds average
    
    console.log('🚀 Performance Benchmark Results:');
    console.log(`Average load time: ${avgLoadTime.toFixed(0)}ms`);
    console.log('Individual runs:', metrics);
  });

  test('network usage comparison', async ({ page }) => {
    const networkRequests: any[] = [];
    let totalBytes = 0;
    
    page.on('response', async (response) => {
      const size = parseInt(response.headers()['content-length'] || '0');
      totalBytes += size;
      
      networkRequests.push({
        url: response.url(),
        status: response.status(),
        size: size,
        type: response.headers()['content-type'] || 'unknown'
      });
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Analyze network usage
    const imageRequests = networkRequests.filter(r => 
      r.type.startsWith('image/') || r.url.includes('/snapshots/')
    );
    
    const totalImageBytes = imageRequests.reduce((sum, r) => sum + r.size, 0);
    
    // Log network analysis
    console.log('🌐 Network Usage Analysis:');
    console.log(`Total page size: ${(totalBytes / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Total image size: ${(totalImageBytes / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Number of image requests: ${imageRequests.length}`);
    
    // Assertions
    expect(totalImageBytes).toBeLessThan(2 * 1024 * 1024); // Images under 2MB total
    expect(totalBytes).toBeLessThan(10 * 1024 * 1024); // Entire page under 10MB
  });

  test('basic performance metrics validation', async ({ page }) => {
    // Measure page load performance using reliable timing methods
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Basic performance validation with realistic thresholds
    expect(loadTime).toBeLessThan(5000); // Total load time under 5s
    
    // Validate page is interactive
    const isInteractive = await page.evaluate(() => {
      return document.readyState === 'complete' && 
             document.body && 
             document.body.children.length > 0;
    });
    
    expect(isInteractive).toBe(true);
    
    // Check that critical content is visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    console.log('⚡ Performance Results:');
    console.log(`Total load time: ${loadTime}ms`);
    console.log(`Page ready state: complete`);
  });
});
