"use client";

import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { gridPatterns } from "@/data/patterns";
import { categories } from "@/data/categories";
import { useFavorites } from "@/context/favourites-context";
import PatternGrid from "./pattern-grid";
import PatternEmptyState from "./pattern-empty-state";
import { SearchBar } from "../search/search-bar";
import CodeFormatSelector from "./code-format-selector";
import { StyledTabsList } from "@/components/ui/styled-tabs";
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

  // Filter patterns based on categories
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
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="text-center sm:text-left">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${
              isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"
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
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mb-8"
      >
        {/* Desktop & Tablet Tabs */}
        <StyledTabsList
          options={[...categories]}
          value={activeTab}
          onValueChange={setActiveTab}
          isPatternDark={isPatternDark}
          gridCols="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
          className="mb-8"
        />

        {/* Mobile /Tablets */}
        <div className="block md:hidden mb-6">
          <div className="flex flex-wrap gap-2 px-1 pb-2 justify-center">
            {categories.map((category) => (
              <button
                key={`mobile-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap
                  text-sm font-medium transition-all duration-300 ease-in-out
                  backdrop-blur-md shadow-lg border
                  hover:scale-[1.02] hover:shadow-xl
                  ${
                    activeTab === category.id
                      ? isPatternDark
                        ? "bg-white/15 text-white border-white/20 shadow-lg"
                        : "bg-white/90 text-gray-900 border-gray-200/40 shadow-lg"
                      : isPatternDark
                      ? "bg-black/20 text-gray-300 border-white/10 hover:bg-black/30 hover:text-white hover:border-white/20"
                      : "bg-white/60 text-gray-600 border-gray-200/30 hover:bg-white/80 hover:text-gray-900 hover:border-gray-300/40"
                  }
                `}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <div className="flex-1 w-full">
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              isPatternDark={isPatternDark}
            />
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <CodeFormatSelector isPatternDark={isPatternDark} />
          </div>
        </div>

        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="mt-0"
          >
            {/* Pattern count */}
            <div className="mb-6">
              <p
                className={`text-sm transition-colors duration-300 ${
                  isPatternDark ? "text-gray-300" : "text-muted-foreground"
                }`}
              >
                {filteredPatterns.length} pattern
                {filteredPatterns.length !== 1 ? "s" : ""}
                {category.id !== "all" && ` in ${category.label}`}
              </p>
            </div>

            {/* Grid */}
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
              <PatternEmptyState
                activeTab={activeTab}
                theme={theme}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
