"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PatternShowcase from "@/components/patterns/pattern-showcase";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { FavoritesProvider } from "@/context/favourites-context";
import { gridPatterns } from "@/data/patterns";
import { useTheme } from "@/hooks/useTheme";

import Hero from "./hero";
import ReturnToPreview from "./return-to-preview";
import SupportDropdown from "./support-dropdown";

export default function HomePage() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const { theme, updateThemeFromPattern } = useTheme();

  useEffect(() => {
    updateThemeFromPattern(activePattern, gridPatterns);
  }, [activePattern, updateThemeFromPattern]);

  const activePatternObj = activePattern
    ? gridPatterns.find((pattern) => pattern.id === activePattern)
    : null;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <FavoritesProvider>
        <div className="min-h-screen relative">
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
      </FavoritesProvider>
      <Toaster />
    </ThemeProvider>
  );
}
