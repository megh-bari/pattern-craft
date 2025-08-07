/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pattern } from "@/types/pattern";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce<T extends any[]>(
  fn: (...args: T) => any,
  timeout: number
) {
  let handle: NodeJS.Timeout;

  return function (...args: T) {
    clearTimeout(handle);
    handle = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}

export function searchPatterns(
  gridPatterns: Pattern[],
  category: string,
  searchInput: string
) {
  if (searchInput === "") return gridPatterns;

  const loweredInput = searchInput.toLowerCase();

  const inputWords = loweredInput.split(" ").filter(Boolean);

  const filteredPatterns = gridPatterns.filter((pattern) => {
    if (pattern.category === category || category === "all") {
      const patternWords = pattern.name.toLowerCase().split(" ");

      if (inputWords.length === 1 && inputWords[0].length === 1) {
        return patternWords[0].startsWith(inputWords[0]);
      }

      return inputWords.every((inputWord) =>
        patternWords.some((patternWord) => patternWord.startsWith(inputWord))
      );
    } else {
      return false;
    }
  });

  const sortedPatterns = filteredPatterns.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const posInA = aName.indexOf(inputWords[0]);
    const posInB = bName.indexOf(inputWords[0]);

    return posInA - posInB;
  });

  return sortedPatterns;
}
