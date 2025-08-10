"use client";

import { useState } from "react";
import { gridPatterns } from "@/data/patterns";
import { categories } from "@/data/categories";
import { useFavorites } from "@/context/favourites-context";
import PatternGrid from "./pattern-grid";
import PatternEmptyState from "./pattern-empty-state";
import { SearchBar } from "../search/search-bar";
import { searchPatterns } from "@/lib/utils";

interface PatternShowcaseProps {
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  theme: "light" | "dark";
}

export default function PatternShowcase({
  activePattern,
  setActivePattern,
  theme,
}: PatternShowcaseProps) {
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const { favourites } = useFavorites();
  const isPatternDark = theme === "dark";

  const [searchInput, setSearchInput] = useState<string>("");

  // Filter patterns
  const filteredPatterns =
    searchInput === ""
      ? activeTab === "all"
        ? gridPatterns
        : activeTab === "favourites"
        ? gridPatterns.filter((pattern) => favourites.includes(pattern.id))
        : gridPatterns.filter((pattern) => pattern.category === activeTab)
      : searchPatterns(gridPatterns, activeTab, searchInput);

  return (
    <section
      id="pattern-showcase"
      className="container mx-auto pt-6 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Header */}
      <div className="mb-8 sm:mb-10 lg:mb-12 text-center sm:text-left">
        <h2
          className={`text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 transition-colors duration-300 ${
            isPatternDark ? "text-white" : "text-gray-900"
          }`}
        >
          Pattern Library
        </h2>
        <p
          className={`text-sm sm:text-base transition-colors duration-300 ${
            isPatternDark ? "text-gray-300" : "text-muted-foreground"
          }`}
        >
          Tap on mobile or hover on desktop to see options
        </p>
      </div>

      {/* Categories + Search */}
      <div className="flex mb-8 gap-4 justify-between">
        {/* Category Pills */}
        <div
          className={`flex items-center gap-2 ${
            isPatternDark ? "bg-gray-800/20" : "bg-gray-100/50"
          } backdrop-blur-sm rounded-2xl p-2 overflow-x-auto`}
        >
          {categories.map((category) => {
            const count =
              category.id === "all"
                ? gridPatterns.length
                : category.id === "favourites"
                ? gridPatterns.filter((p) => favourites.includes(p.id)).length
                : gridPatterns.filter((p) => p.category === category.id).length;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center cursor-pointer ${
                  activeTab === category.id
                    ? `${
                        isPatternDark
                          ? "text-white bg-gray-700/50"
                          : "text-gray-900 bg-white/50"
                      } shadow-sm`
                    : `${
                        isPatternDark
                          ? "text-gray-200 hover:text-white hover:bg-gray-700/50"
                          : "text-gray-900 hover:text-gray-900 hover:bg-white/50"
                      }`
                }`}
              >
                <span>{category.label}</span>
                {count >= 0 && (
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs ${
                      isPatternDark
                        ? "bg-gray-600 text-gray-200"
                        : "bg-gray-200"
                    } rounded-full`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            isPatternDark={isPatternDark}
          />
        </div>
      </div>

      {/* Pattern Grid / Empty State */}
      {filteredPatterns.length > 0 ? (
        <PatternGrid
          patterns={filteredPatterns}
          activePattern={activePattern}
          setActivePattern={setActivePattern}
          theme={theme}
          activeMobileCard={activeMobileCard}
          setActiveMobileCard={setActiveMobileCard}
        />
      ) : (
        <PatternEmptyState activeTab={activeTab} theme={theme} />
      )}
    </section>
  );
}
