const fs = require("fs");
const path = require("path");

// copy package.json:
const srcP = path.join(__dirname,"..","package","react","package.json");
const destP = path.join(__dirname,"..","build","package.json");
fs.copyFileSync(srcP,destP);
console.log("✅ build/package.json");

// copy readme:
const srcR = path.join(__dirname,"..","package","react","README.md");
const destR = path.join(__dirname,"..","build","README.md");
fs.copyFileSync(srcR,destR);
console.log("✅ build/README.md");

// copy LICENSE:
const srcL = path.join(__dirname,"..","LICENSE");
const destL = path.join(__dirname,"..","build","LICENSE");
fs.copyFileSync(srcL,destL);
console.log("✅ build/LICENSE");