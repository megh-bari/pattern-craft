"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { CSSProperties } from "react";

function buildCssFromStyle(style: CSSProperties) {
  const lines: string[] = [];
  Object.entries(style).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    const cssKey = key
      .replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
      .replace(/^webkit-/, "-webkit-");
    lines.push(`${cssKey}: ${String(value)};`);
  });
  return lines.join("\n");
}

function incrementMetric(id: string, field: "copied" | "favourited") {
  try {
    const raw = localStorage.getItem("patternMetrics");
    const data = raw ? JSON.parse(raw) : {};
    const entry = data[id] || { copied: 0, favourited: 0, lastUsed: 0 };
    entry[field] = (entry[field] || 0) + 1;
    entry.lastUsed = Date.now();
    data[id] = entry;
    localStorage.setItem("patternMetrics", JSON.stringify(data));
  } catch {}
}

export function useCopy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyRaw = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedId(null), 1000);
      incrementMetric(id, "copied");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      toast.error("Failed to copy code");
    }
  };

  const copyJSXFixed = async (code: string, id: string) => {
    const transformed = code.replace(/className=\"([^\"]*)\babsolute\b([^\"]*)\"/g, (m, a, b) => {
      const cls = `${a} ${b}`.replace(/\s+/g, " ").trim();
      const replaced = cls.replace(/\babsolute\b/, "fixed");
      return `className=\"${replaced}\"`;
    });
    await copyRaw(transformed, id);
  };

  const copyJSXAbsolute = async (code: string, id: string) => {
    await copyRaw(code, id);
  };

  const copyCSS = async (style: CSSProperties, id: string) => {
    const css = buildCssFromStyle(style);
    await copyRaw(css, id);
  };

  const isCopied = (id: string) => copiedId === id;

  return {
    copyJSXFixed,
    copyJSXAbsolute,
    copyCSS,
    isCopied,
  };
}
