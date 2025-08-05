"use client";

import { Palette, Star } from "lucide-react";
import { useFavorites } from "@/context/favourites-context";

interface PatternEmptyStateProps {
  activeTab: string;
  theme: "light" | "dark";
}

export default function PatternEmptyState({
  activeTab,
  theme,
}: PatternEmptyStateProps) {
  const { favourites } = useFavorites();
  const isPatternDark = theme === "dark";

  if (activeTab === "favourites" && favourites.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 text-yellow-400 flex justify-center">
          <Star className="h-12 w-12" />
        </div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isPatternDark ? "text-gray-200" : "text-black dark:text-gray-200"
          }`}
        >
          No favourites yet
        </h3>
        <p
          className={`${
            isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
          }`}
        >
          You haven&apos;t saved any favorites yet. Tap the{" "}
          <Star className="inline -mt-1 h-4 w-4 text-yellow-400" /> icon on a
          pattern to add it to your favorites!
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4 text-purple-400 flex justify-center">
        <Palette className="h-12 w-12" />
      </div>
      <h3
        className={`text-lg font-semibold mb-2 ${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        No patterns found
      </h3>
      <p
        className={`${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        No patterns available in this category yet.
      </p>
    </div>
  );
}
