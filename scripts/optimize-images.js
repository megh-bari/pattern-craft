#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SNAPSHOTS_DIR = path.join(__dirname, '../public/snapshots');
const OPTIMIZED_DIR = path.join(__dirname, '../public/snapshots-optimized');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

// Ensure optimized directory exists
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    console.log(`📸 Processing: ${path.basename(inputPath)} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original dimensions: ${metadata.width}x${metadata.height}`);
    
    // Calculate new dimensions maintaining aspect ratio
    let newWidth = metadata.width;
    let newHeight = metadata.height;
    
    if (newWidth > MAX_WIDTH || newHeight > MAX_HEIGHT) {
      const widthRatio = MAX_WIDTH / newWidth;
      const heightRatio = MAX_HEIGHT / newHeight;
      const ratio = Math.min(widthRatio, heightRatio);
      
      newWidth = Math.round(newWidth * ratio);
      newHeight = Math.round(newHeight * ratio);
    }
    
    // Process image: resize and convert to WebP
    await sharp(inputPath)
      .resize(newWidth, newHeight, {
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: true
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`   ✅ New dimensions: ${newWidth}x${newHeight}`);
    console.log(`   💾 Size: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    console.log('');
    
    return {
      originalSize,
      newSize,
      reduction: parseFloat(reduction),
      originalFile: path.basename(inputPath),
      optimizedFile: path.basename(outputPath)
    };
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const pngFiles = fs.readdirSync(SNAPSHOTS_DIR)
    .filter(file => file.toLowerCase().endsWith('.png'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/) || [0]);
      const numB = parseInt(b.match(/\d+/) || [0]);
      return numA - numB;
    });
  
  console.log(`Found ${pngFiles.length} PNG files to optimize\n`);
  
  const results = [];
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (const file of pngFiles) {
    const inputPath = path.join(SNAPSHOTS_DIR, file);
    const outputPath = path.join(OPTIMIZED_DIR, file.replace('.png', '.webp'));
    
    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      results.push(result);
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }
  
  // Summary
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('========================');
  console.log(`Files processed: ${results.length}`);
  console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized total size: ${(totalNewSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`Space saved: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)}MB`);
  
  // Create mapping file for reference updates
  const mapping = results.reduce((acc, result) => {
    acc[result.originalFile] = result.optimizedFile;
    return acc;
  }, {});
  
  fs.writeFileSync(
    path.join(__dirname, 'image-mapping.json'),
    JSON.stringify(mapping, null, 2)
  );
  
  console.log('\n✅ Optimization complete!');
  console.log('📝 Image mapping saved to scripts/image-mapping.json');
  console.log('🔍 Optimized images are in public/snapshots-optimized/');
}

main().catch(console.error);
