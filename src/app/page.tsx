"use client";

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PatternShowcase from "./components/pattern-showcase";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { initializePatterns } from "./utils/patterns/index";
import { Pattern } from "./types/pattern";
import { Toaster } from "sonner";
import SupportDropdown from "./components/SupportDropdownProps ";
import ReturnToPreview from "./components/ReturnToPreview";

export default function Home() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [patternsLoaded, setPatternsLoaded] = useState(false);

  // Load patterns on component mount
  useEffect(() => {
    const loadPatterns = async () => {
      try {
        const loadedPatterns = await initializePatterns();
        setPatterns(loadedPatterns);
        setPatternsLoaded(true);
      } catch (error) {
        console.error('Failed to load patterns:', error);
      }
    };
    loadPatterns();
  }, []);

  // Find the active pattern object
  const activePatternObj = activePattern
    ? patterns.find((p) => p.id === activePattern)
    : null;

  // Update theme based on pattern background color
  useEffect(() => {
    if (activePatternObj) {
      // Check if pattern ID starts with "dark-" or contains specific dark colors
      const background = activePatternObj.style.background || "";
      const isDark =
        activePatternObj.id.startsWith("dark-") ||
        (typeof background === "string" &&
          (background.includes("#0") ||
            background.includes("#1") ||
            background.includes("rgba(0,") ||
            background.includes("rgba(1,")));

      setTheme(isDark ? "dark" : "light");
    } else {
      setTheme("light");
    }
  }, [activePattern, activePatternObj]);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen relative">
          {/* Apply the active pattern as background */}
          {activePatternObj && (
            <div className="fixed inset-0 z-0" style={activePatternObj.style} />
          )}
          <div className="relative z-10">
            <Navbar theme={theme} />
            <SupportDropdown theme={theme}/>
            <Hero
              activePattern={activePattern}
              setActivePattern={setActivePattern}
              theme={theme}
            />
            {patternsLoaded ? (
              <PatternShowcase
                activePattern={activePattern}
                setActivePattern={setActivePattern}
                theme={theme}
                patterns={patterns}
              />
            ) : (
              <div className="container pt-6 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
                <div className="text-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading patterns...</p>
                </div>
              </div>
            )}
            <Footer theme={theme} />
          </div>
          <ReturnToPreview theme={theme}  />
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
