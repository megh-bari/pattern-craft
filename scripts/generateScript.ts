/** script to automatically generate all patterns and types
 * to /package/react/data.ts and
 * to /package/react/types.ts
 * using @/data/patterns: */

import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { gridPatterns } from "../src/data/patterns";

// generate patternNames Array:
let names = `/** Auto generated do not modify */
import type {patternNameType} from "./types"
export const patternNames : patternNameType[] = ${JSON.stringify(
  gridPatterns.map((item) => item.name),
  null,
  2
)} 
`; //as const;

// copy patterns (only style field) to package/react dir //import type { gridPatternsType } from "./types";
let ptrns = `/** All Patterns */
import type {gridPatternsType} from "./types"
export const gridPatterns: gridPatternsType[] = ${JSON.stringify(
  gridPatterns.map((item) => ({ style: item.style, name:item.name })),
  null,
  2
)};
`;

try {
  fs.writeFileSync(
    path.join(__dirname, "..", "package/react/data.ts"),
    `${names} \n${ptrns}`,
    { encoding: "utf8" }
  );
  console.log("✅ GENERATED DATA ");
} catch (error) {
  console.log("FAILED TO GENERATE DATA ❌");
}

// generate type for patternNames Array:
let namestype = `/** Type declaration */
export type patternNameType =
`;
gridPatterns.forEach((pattern, i) => {
  namestype += `"${pattern.name}" ${
    i !== gridPatterns.length - 1 ? "|" : ";"
  } \n`;
});

const gridPatternsType = `
export type gridPatternsType = {
    name:string;
    style: React.CSSProperties;
};

`;

try {
  fs.writeFileSync(
    path.join(__dirname, "..", "package/react/types.ts"),
    `${namestype} \n ${gridPatternsType}`,
    { encoding: "utf8" }
  );
  console.log("✅ GENERATED TYPES ");
} catch (error) {
  console.log("FAILED TO GENERATE TYPES ❌");
}
