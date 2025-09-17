"use client";

import { useEffect, useMemo, useState } from "react";
import { gridPatterns } from "@/data/patterns";
import PatternGrid from "./pattern-grid";
import type { Pattern } from "@/types/pattern";

interface PopularPatternsProps {
  theme: "light" | "dark";
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  activeMobileCard: string | null;
  setActiveMobileCard: (id: string | null) => void;
}

export default function PopularPatterns({
  theme,
  activePattern,
  setActivePattern,
  activeMobileCard,
  setActiveMobileCard,
}: PopularPatternsProps) {
  const [popular, setPopular] = useState<Pattern[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("patternMetrics");
      if (!raw) return;
      const data = JSON.parse(raw) as Record<string, { copied: number; favourited: number; lastUsed: number }>;
      const scored = Object.entries(data)
        .map(([id, v]) => ({ id, score: (v.copied || 0) * 2 + (v.favourited || 0), lastUsed: v.lastUsed || 0 }))
        .filter((e) => e.score > 0)
        .sort((a, b) => (b.score === a.score ? b.lastUsed - a.lastUsed : b.score - a.score))
        .slice(0, 8);
      const byId = new Set(scored.map((s) => s.id));
      const items = gridPatterns.filter((p) => byId.has(p.id));
      setPopular(items);
    } catch {}
  }, [activePattern]);

  const isPatternDark = theme === "dark";

  const hasData = useMemo(() => popular.length > 0, [popular.length]);

  if (!hasData) return null;

  return (
    <section className="mb-8">
      <div className="mb-4">
        <h3 className={`text-xl sm:text-2xl font-semibold ${isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"}`}>Popular</h3>
        <p className={`text-sm ${isPatternDark ? "text-gray-300" : "text-muted-foreground"}`}>Based on your copies and favorites</p>
      </div>
      <PatternGrid
        patterns={popular}
        activePattern={activePattern}
        setActivePattern={setActivePattern}
        theme={theme}
        activeMobileCard={activeMobileCard}
        setActiveMobileCard={setActiveMobileCard}
      />
    </section>
  );
}
