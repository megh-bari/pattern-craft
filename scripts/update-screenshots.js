#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Updating Playwright screenshots for CI...');

// Remove existing screenshots
const screenshotsDir = path.join(__dirname, '..', 'tests', 'image-optimization.spec.ts-snapshots');
if (fs.existsSync(screenshotsDir)) {
  console.log('🗑️  Removing existing screenshots...');
  fs.rmSync(screenshotsDir, { recursive: true, force: true });
}

// Update screenshots using Playwright
try {
  console.log('📸 Generating new baseline screenshots...');
  execSync('npx playwright test tests/image-optimization.spec.ts --update-snapshots', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('✅ Screenshots updated successfully!');
  console.log('📝 Don\'t forget to commit the new screenshots to git');
  
} catch (error) {
  console.error('❌ Failed to update screenshots:', error.message);
  process.exit(1);
}
