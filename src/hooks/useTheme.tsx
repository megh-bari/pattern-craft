"use client";

import { useState, useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Pattern } from "@/types/pattern";
import { THEME_CONFIG } from "@/lib/constants";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { setTheme: setNextTheme } = useNextTheme();

  const applyTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    // propagate to next-themes so the `.dark` class toggles and CSS vars update
    setNextTheme(newTheme);
  };

  const updateThemeFromPattern = (
    activePattern: string | null,
    patterns: Pattern[]
  ) => {
    if (!activePattern) {
      applyTheme(THEME_CONFIG.light);
      return;
    }

    const activePatternObj = patterns.find((p) => p.id === activePattern);
    if (!activePatternObj) {
      applyTheme(THEME_CONFIG.light);
      return;
    }

    const background = activePatternObj.style.background || "";
    const isDark =
      activePatternObj.id.startsWith("dark-") ||
      (typeof background === "string" &&
        (background.includes("#0") ||
          background.includes("#1") ||
          background.includes("rgba(0,") ||
          background.includes("rgba(1,")));

    applyTheme(isDark ? THEME_CONFIG.dark : THEME_CONFIG.light);
  };

  useEffect(() => {
    // keep next-themes in sync on initial mount
    setNextTheme(theme);
  }, [theme, setNextTheme]);

  return {
    theme,
    setTheme: applyTheme,
    updateThemeFromPattern,
  };
}
