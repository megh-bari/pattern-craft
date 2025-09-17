"use client";

import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { gridPatterns } from "@/data/patterns";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import PatternShowcase from "@/components/patterns/pattern-showcase";
import SupportDropdown from "@/components/home/support-dropdown";
import ReturnToPreview from "@/components/home/return-to-preview";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { FavoritesProvider } from "@/context/favourites-context";
import { CodeFormatProvider } from "@/context/code-format-context";

export default function Home() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const { theme, updateThemeFromPattern } = useTheme();

  // Update theme based on pattern background color
  useEffect(() => {
    updateThemeFromPattern(activePattern, gridPatterns);
  }, [activePattern, updateThemeFromPattern]);

  // Find the active pattern object
  const activePatternObj = activePattern
    ? gridPatterns.find((p) => p.id === activePattern)
    : null;

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <FavoritesProvider>
          <CodeFormatProvider>
          <div className="min-h-screen relative">
            {/* Apply the active pattern as background */}
            {activePatternObj && (
              <div
                className="fixed inset-0 z-0"
                style={activePatternObj.style}
              />
            )}
            <div className="relative z-10">
              <Navbar theme={theme} />
              <SupportDropdown theme={theme} />
              <Hero
                activePattern={activePattern}
                setActivePattern={setActivePattern}
                theme={theme}
              />
              <PatternShowcase
                activePattern={activePattern}
                setActivePattern={setActivePattern}
                theme={theme}
              />
              <Footer theme={theme} />
            </div>
            <ReturnToPreview theme={theme} />
            <div className="fixed bottom-6 right-16 sm:right-20 z-50">
              <ScrollToTop theme={theme} />
            </div>
          </div>
          </CodeFormatProvider>
        </FavoritesProvider>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
