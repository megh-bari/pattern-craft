import { Pattern } from "@/app/types/pattern";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPatternTheme({ id, style }: Pattern): 'dark' | 'light' {
  if (id.startsWith("dark-") ||
        (typeof style.background === "string" &&
          (style.background.includes("#0") ||
            style.background.includes("#1") ||
            style.background.includes("rgba(0,") ||
            style.background.includes("rgba(1,")))) {
    return "dark";
  }
  return "light";
}

export function isDarkPattern(pattern: Pattern): boolean {
  return getPatternTheme(pattern) === "dark";
}

export function isLightPattern(pattern: Pattern): boolean {
  return getPatternTheme(pattern) === "light";
}

export function makePatternFilterByCategory(category: string) {
  return (pattern: Pattern) => pattern.category === category;
};
