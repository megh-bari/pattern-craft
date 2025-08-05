import { Pattern } from "@/app/types/pattern";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function searchPatterns(gridPatterns: Pattern[], searchInput: string) {
  if (searchInput === "") return gridPatterns;

  const loweredInput = searchInput.toLowerCase();

  const inputWords = loweredInput.split(" ");

  const filteredPatterns = gridPatterns.filter((pattern) => {
    const patternWords = pattern.name.toLowerCase().split(" ");

    return inputWords.every((inputWord) =>
      patternWords.some((patternWord) => patternWord.startsWith(inputWord))
    );
  });

  const sortedPatterns = filteredPatterns.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const posInA = aName.indexOf(loweredInput[0]);
    const posInB = bName.indexOf(loweredInput[0]);

    return posInA - posInB;
  });

  return sortedPatterns;
}
