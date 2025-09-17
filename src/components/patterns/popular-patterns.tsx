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
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/popular.json", { cache: "no-store" });
        if (!res.ok) throw new Error("failed");
        const data: { ranking: string[] } = await res.json();
        const byId = new Map(gridPatterns.map((p) => [p.id, p] as const));
        const ranked: Pattern[] = data.ranking
          .map((id) => byId.get(id))
          .filter(Boolean)
          .slice(0, 8) as Pattern[];
        if (!cancelled) setPopular(ranked);
      } catch {
        const fallback = gridPatterns.slice(0, 8);
        if (!cancelled) setPopular(fallback);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const isPatternDark = theme === "dark";

  const hasData = useMemo(() => popular.length > 0, [popular.length]);

  if (!hasData) return null;

  return (
    <section className="mb-8">
      <div className="mb-4">
        <h3 className={`text-xl sm:text-2xl font-semibold ${isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"}`}>Popular</h3>
        <p className={`text-sm ${isPatternDark ? "text-gray-300" : "text-muted-foreground"}`}>Popular among all users</p>
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
