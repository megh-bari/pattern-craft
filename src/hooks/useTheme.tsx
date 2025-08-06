"use client";

import { useState } from "react";
import { Pattern } from "@/types/pattern";
import { THEME_CONFIG } from "@/lib/constants";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const updateThemeFromPattern = (
    activePattern: string | null,
    patterns: Pattern[]
  ) => {
    if (!activePattern) {
      setTheme(THEME_CONFIG.light);
      return;
    }

    const activePatternObj = patterns.find((p) => p.id === activePattern);
    if (!activePatternObj) {
      setTheme(THEME_CONFIG.light);
      return;
    }

    // Check if pattern ID starts with "dark-" or contains specific dark colors
    const background = activePatternObj.style.background || "";
    const isDark =
      activePatternObj.id.startsWith("dark-") ||
      (typeof background === "string" &&
        (background.includes("#0") ||
          background.includes("#1") ||
          background.includes("rgba(0,") ||
          background.includes("rgba(1,")));

    setTheme(isDark ? THEME_CONFIG.dark : THEME_CONFIG.light);
  };

  return {
    theme,
    setTheme,
    updateThemeFromPattern,
  };
}
