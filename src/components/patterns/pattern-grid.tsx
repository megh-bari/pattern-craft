"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { Pattern } from "@/types/pattern";
import PatternCard from "@/components/patterns/pattern-card";
import { useFavorites } from "@/context/favourites-context";

interface PatternGridProps {
  patterns: Pattern[];
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  theme: "light" | "dark";
  activeMobileCard: string | null;
  setActiveMobileCard: (id: string | null) => void;
}

function getColumnCount(width: number) {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function PatternGrid({
  patterns,
  activePattern,
  setActivePattern,
  theme,
  activeMobileCard,
  setActiveMobileCard,
}: PatternGridProps) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { favourites } = useFavorites();
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [scrollMargin, setScrollMargin] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const calculateMetrics = () => {
      const width = parentRef.current?.clientWidth ?? window.innerWidth;
      setContainerWidth(width);
      setViewportWidth(window.innerWidth);

      if (parentRef.current) {
        let offset = 0;
        let node: HTMLElement | null = parentRef.current;

        while (node) {
          offset += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }

        setScrollMargin(offset);
      }
    };

    calculateMetrics();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => calculateMetrics())
        : null;
    if (resizeObserver && parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    window.addEventListener("resize", calculateMetrics);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", calculateMetrics);
    };
  }, []);

  const columnCount = useMemo(() => {
    const basis = viewportWidth || containerWidth;
    if (!basis) return 1;
    return getColumnCount(basis);
  }, [containerWidth, viewportWidth]);

  const gap = columnCount > 1 ? 24 : 16; // Matches gap-4 / sm:gap-6 spacing

  const rowCount = useMemo(() => {
    return columnCount > 0 ? Math.ceil(patterns.length / columnCount) : 0;
  }, [columnCount, patterns.length]);

  const estimatedRowHeight = useMemo(() => {
    if (!containerWidth || columnCount === 0) return 400;
    const totalGap = gap * Math.max(columnCount - 1, 0);
    const cardWidth = (containerWidth - totalGap) / columnCount;
    const contentBuffer = 180; // Accounts for controls/text below the preview
    return Math.max(cardWidth + contentBuffer + gap, 320);
  }, [columnCount, containerWidth, gap]);

  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => estimatedRowHeight,
    overscan: 5,
    scrollMargin,
  });

  useEffect(() => {
    rowVirtualizer.measure();
  }, [rowVirtualizer, columnCount, estimatedRowHeight]);

  return (
    <div ref={parentRef} className="relative w-full" data-pattern-list>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
          width: "100%",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const startIndex = virtualRow.index * columnCount;
          const rowPatterns = patterns.slice(
            startIndex,
            startIndex + columnCount
          );
          const translateY = Math.max(0, virtualRow.start - scrollMargin);
          const isLastRow = virtualRow.index === rowCount - 1;

          return (
            <div
              key={virtualRow.key}
              ref={rowVirtualizer.measureElement}
              data-index={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translateY(${translateY}px)`,
                width: "100%",
                paddingBottom: isLastRow ? 0 : gap,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {rowPatterns.map((pattern) => (
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
