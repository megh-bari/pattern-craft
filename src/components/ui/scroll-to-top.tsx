"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  theme?: "light" | "dark";
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme = "light" }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md border shadow-xl
        flex items-center justify-center transition-all duration-300
        hover:scale-105 active:scale-95
        ${
          theme === "dark"
            ? "bg-black/50 border-white/10 hover:bg-black/40"
            : "bg-white border-gray-300 hover:bg-gray-50"
        }
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp
        className={`w-5 sm:w-6 h-5 sm:h-6 ${
          theme === "dark" ? "text-white/80" : "text-gray-600"
        }`}
      />
    </button>
  );
};

export default ScrollToTop;