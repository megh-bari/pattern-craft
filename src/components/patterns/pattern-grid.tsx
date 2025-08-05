"use client";

import { Pattern } from "@/types/pattern";
import PatternCard from "./pattern-card";
import { useFavorites } from "@/context/favourites-context";

interface PatternGridProps {
  patterns: Pattern[];
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  theme: "light" | "dark";
  activeMobileCard: string | null;
  setActiveMobileCard: (id: string | null) => void;
}

export default function PatternGrid({
  patterns,
  activePattern,
  setActivePattern,
  theme,
  activeMobileCard,
  setActiveMobileCard,
}: PatternGridProps) {
  const { favourites } = useFavorites();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {patterns.map((pattern) => (
        <PatternCard
          key={`${pattern.id}-${favourites.includes(pattern.id)}`}
          pattern={pattern}
          activePattern={activePattern}
          setActivePattern={setActivePattern}
          theme={theme}
          activeMobileCard={activeMobileCard}
          setActiveMobileCard={setActiveMobileCard}
        />
      ))}
    </div>
  );
}
