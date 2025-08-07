const fs = require('fs');
const path = require('path');

const inputFile = 'src/app/utils/patterns.ts';
const outputDir = 'src/app/utils/patterns';

// Read the original patterns file
const content = fs.readFileSync(inputFile, 'utf8');

// Categories to split into
const categories = {
  gradients: [],
  geometric: [],
  decorative: [],
  effects: []
};

// Extract pattern objects using regex
const patternRegex = /{\s*id:\s*"[^"]+",[\s\S]*?},?\s*(?={\s*id:|$)/g;
const patterns = content.match(patternRegex) || [];

console.log(`Found ${patterns.length} patterns to split`);

// Process each pattern
patterns.forEach((pattern, index) => {
  // Find category
  const categoryMatch = pattern.match(/category:\s*"([^"]+)"/);
  if (categoryMatch && categories[categoryMatch[1]]) {
    // Clean up the pattern (remove trailing comma if it's the last one)
    const cleanPattern = pattern.trim().replace(/,$/, '');
    categories[categoryMatch[1]].push(cleanPattern);
  } else {
    console.warn(`Pattern ${index + 1} does not have a valid category:`, categoryMatch ? categoryMatch[1] : 'none');
  }
});

// Write category files
Object.entries(categories).forEach(([category, patterns]) => {
  const fileName = `${category}.ts`;
  const filePath = path.join(outputDir, fileName);
  
  const fileContent = `import { Pattern } from "../../types/pattern";

export const ${category}Patterns: Pattern[] = [
${patterns.map(pattern => `  ${pattern}`).join(',\n')}
];
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`✅ Created ${fileName} with ${patterns.length} patterns`);
});

console.log('\n📊 Pattern distribution:');
Object.entries(categories).forEach(([category, patterns]) => {
  console.log(`  ${category}: ${patterns.length} patterns`);
});

console.log('\n🎯 Next steps:');
console.log('1. Update components to use dynamic loading');
console.log('2. Test the application');
console.log('3. Remove the old patterns.ts file');
