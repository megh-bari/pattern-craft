#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LAYOUT_FILE = path.join(__dirname, '../src/app/layout.tsx');

function revertPaths() {
  console.log('🔄 Reverting paths from /snapshots-optimized/ to /snapshots/...\n');
  
  let layoutContent = fs.readFileSync(LAYOUT_FILE, 'utf8');
  
  // Replace all occurrences of snapshots-optimized with snapshots
  const updatedContent = layoutContent.replace(/snapshots-optimized/g, 'snapshots');
  
  fs.writeFileSync(LAYOUT_FILE, updatedContent);
  
  console.log('✅ Updated all paths to use /snapshots/ (which now contains WebP files)');
  console.log('📁 Directory structure:');
  console.log('   - public/snapshots/ → contains optimized WebP files');  
  console.log('   - public/snapshots-original-backup/ → contains original PNG files');
}

revertPaths();
