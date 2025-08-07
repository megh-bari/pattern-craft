"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
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
        <TabsList
          className={`
            hidden md:grid
            grid-cols-2 sm:grid-cols-3 md:grid-cols-6
            w-full h-auto p-1.5
            backdrop-blur-md shadow-lg border
            rounded-xl mb-8 transition-all duration-300
            ${
              isPatternDark
                ? "bg-black/20 border-white/10 hover:bg-black/30"
                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
            }
          `}
        >
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className={`
                flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 
                py-2.5 px-2 sm:px-3 lg:px-4
                text-xs sm:text-sm font-medium
                rounded-lg
                transition-all duration-300 ease-in-out
                min-h-[44px] sm:min-h-[40px]
                relative overflow-hidden
                group
                ${
                  isPatternDark
                    ? `data-[state=active]:bg-white/10 data-[state=active]:text-white 
                       data-[state=active]:shadow-lg data-[state=active]:border 
                       data-[state=active]:border-white/20 data-[state=active]:backdrop-blur-sm
                       data-[state=inactive]:text-gray-300 
                       data-[state=inactive]:hover:text-white
                       data-[state=inactive]:hover:bg-white/5`
                    : `data-[state=active]:bg-white/90 data-[state=active]:text-gray-900 
                       data-[state=active]:shadow-lg data-[state=active]:border 
                       data-[state=active]:border-gray-200/40 data-[state=active]:backdrop-blur-sm
                       data-[state=inactive]:text-gray-600 
                       data-[state=inactive]:hover:text-gray-900
                       data-[state=inactive]:hover:bg-white/40`
                }
              `}
            >
              <div
                className={`
                  absolute inset-0 rounded-lg opacity-0 
                  data-[state=active]:opacity-100 transition-all duration-300
                  ${
                    isPatternDark
                      ? "bg-gradient-to-br from-white/15 to-white/5"
                      : "bg-gradient-to-br from-white/95 to-white/80"
                  }
                `}
              />
              <span className="font-medium z-10 text-center leading-tight">
                {category.label}
              </span>
              <div
                className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                  rounded-full transition-all duration-300 
                  group-data-[state=active]:w-8
                  ${isPatternDark ? "bg-white/60" : "bg-primary"}
                `}
              />
            </TabsTrigger>
          ))}
        </TabsList>

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

        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          isPatternDark={isPatternDark}
        ></SearchBar>

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
