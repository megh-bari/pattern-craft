#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LAYOUT_FILE = path.join(__dirname, '../src/app/layout.tsx');
const MAPPING_FILE = path.join(__dirname, 'image-mapping.json');

function updateImageReferences() {
  console.log('🔄 Updating image references in layout.tsx...\n');
  
  // Read the mapping file
  const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
  
  // Read the layout file
  let layoutContent = fs.readFileSync(LAYOUT_FILE, 'utf8');
  
  let changesCount = 0;
  
  // Update each reference
  Object.entries(mapping).forEach(([oldFile, newFile]) => {
    const oldPath = `https://patterncraft.fun/snapshots/${oldFile}`;
    const newPath = `https://patterncraft.fun/snapshots-optimized/${newFile}`;
    
    if (layoutContent.includes(oldPath)) {
      layoutContent = layoutContent.replace(oldPath, newPath);
      changesCount++;
      console.log(`✅ Updated: ${oldFile} → ${newFile}`);
    }
  });
  
  // Write the updated content back
  fs.writeFileSync(LAYOUT_FILE, layoutContent);
  
  console.log(`\n📝 Updated ${changesCount} image references in layout.tsx`);
  console.log('✅ All references now point to optimized WebP images');
}

updateImageReferences();
