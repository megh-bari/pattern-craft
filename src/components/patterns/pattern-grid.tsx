/* eslint-disable react/display-name */
"use client";

import { Pattern } from "@/types/pattern";
import PatternCard from "./pattern-card";
import { useFavorites } from "@/context/favourites-context";
import { forwardRef } from "react";
import { GridComponents, VirtuosoGrid } from "react-virtuoso";

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

  const gridComponents: GridComponents = {
    List: forwardRef(({ style, children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
          ...style,
        }}
        className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6"
      >
        {children}
      </div>
    )),
    Item: ({ style, children, ...props }) => (
      <div
        {...props}
        style={{ ...style }}
      >
        {children}
      </div>
    ),
  };

  return (
    <VirtuosoGrid
      useWindowScroll
      totalCount={patterns.length}
      components={gridComponents}
      itemContent={(index) => {
        const pattern = patterns[index];
        return (
          <PatternCard
            key={`${pattern.id}-${favourites.includes(pattern.id)}`}
            pattern={pattern}
            activePattern={activePattern}
            setActivePattern={setActivePattern}
            theme={theme}
            activeMobileCard={activeMobileCard}
            setActiveMobileCard={setActiveMobileCard}
          />
        );
      }}
    />
  );
}
