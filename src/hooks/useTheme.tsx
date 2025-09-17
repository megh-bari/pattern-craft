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

    const strA = typeof activePatternObj.style.background === "string" ? activePatternObj.style.background : "";
    const strB = typeof activePatternObj.style.backgroundImage === "string" ? activePatternObj.style.backgroundImage : "";
    const source = `${activePatternObj.id} ${strA} ${strB}`.toLowerCase();

    const hexRegex = /#([0-9a-f]{3}|[0-9a-f]{6})/gi;
    const rgbRegex = /rgba?\(([^)]+)\)/gi;

    const hexColors = [...source.matchAll(hexRegex)].map((m) => m[0]);
    const rgbColors = [...source.matchAll(rgbRegex)].map((m) => m[0]);

    const toRgb = (hex: string) => {
      const h = hex.replace("#", "");
      if (h.length === 3) {
        const r = parseInt(h[0] + h[0], 16);
        const g = parseInt(h[1] + h[1], 16);
        const b = parseInt(h[2] + h[2], 16);
        return [r, g, b];
      }
      const r = parseInt(h.substring(0, 2), 16);
      const g = parseInt(h.substring(2, 4), 16);
      const b = parseInt(h.substring(4, 6), 16);
      return [r, g, b];
    };

    const parseRgb = (rgb: string) => {
      const parts = rgb.replace(/rgba?\(|\)/g, "").split(",").map((s) => s.trim());
      const r = Math.max(0, Math.min(255, parseFloat(parts[0] || "0")));
      const g = Math.max(0, Math.min(255, parseFloat(parts[1] || "0")));
      const b = Math.max(0, Math.min(255, parseFloat(parts[2] || "0")));
      const a = parts[3] !== undefined ? Math.max(0, Math.min(1, parseFloat(parts[3] || "1"))) : 1;
      return { r, g, b, a };
    };

    const luminance = (r: number, g: number, b: number) => {
      const srgb = [r, g, b].map((v) => {
        const c = v / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    };

    let darkScore = 0;
    let lightScore = 0;

    hexColors.forEach((hex) => {
      const [r, g, b] = toRgb(hex);
      const l = luminance(r, g, b);
      if (l < 0.3) darkScore += 1;
      else lightScore += 1;
    });

    rgbColors.forEach((rgb) => {
      const { r, g, b, a } = parseRgb(rgb);
      const l = luminance(r, g, b);
      const weight = a === 0 ? 0 : a;
      if (l < 0.3) darkScore += weight;
      else lightScore += weight;
    });

    if (source.includes("dark-")) darkScore += 2;
    if (source.includes("#000") || source.includes("black")) darkScore += 2;

    const hasWhiteHint = source.includes("#fff") || source.includes("white") || source.includes("#ffffff");
    const hasBlackHint = source.includes("#000") || source.includes("black");

    if (hasWhiteHint && !hasBlackHint) {
      setTheme(THEME_CONFIG.light);
      return;
    }

    const isDark = darkScore > lightScore + 1;
    setTheme(isDark ? THEME_CONFIG.dark : THEME_CONFIG.light);
  };

  return {
    theme,
    setTheme,
    updateThemeFromPattern,
  };
}
