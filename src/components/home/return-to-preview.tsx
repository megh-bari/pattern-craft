"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface ReturnToPreviewProps {
  theme?: "light" | "dark";
}

export default function ReturnToPreview({
  theme = "light",
}: ReturnToPreviewProps) {
  const [showButton, setShowButton] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const savedScrollY = useRef<number>(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const saveScrollPosition = (position: number) => {
    savedScrollY.current = position;
    setHasScrolledDown(true);
  };

  const handlePreviewClick = () => {
    saveScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setShowButton(hasScrolledDown && currentScrollY < 150);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolledDown]);

  const handleReturn = () => {
    window.scrollTo({
      top: savedScrollY.current,
      behavior: "smooth",
    });
    setShowButton(false);
  };

  useEffect(() => {
    if (!showButton) return;
    setTooltipVisible(true);

    const timer = setTimeout(() => {
      setTooltipVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showButton]);

  return (
    <>
      <span
        id="trigger-preview-scroll"
        style={{ display: "none" }}
        aria-hidden="true"
        onClick={handlePreviewClick}
      />
      {showButton && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 inline-block">
          <Button
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md border shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
              theme === "dark"
                ? "bg-black/50 border-white/10 text-white hover:bg-black/40"
                : "bg-white/90 border-gray-200 text-black hover:bg-white"
            }`}
            onClick={handleReturn}
            aria-label="Return back to preview"
          >
            <ArrowDown className="size-4" />
          </Button>
          {tooltipVisible && (
            <span
              className={`absolute top-1/2 right-full mr-2 -translate-y-1/2 whitespace-nowrap px-2 py-1.5 text-xs rounded-md shadow-lg backdrop-blur-sm z-50 border ${
                theme === "dark"
                  ? "bg-black/80 text-white border-white/20"
                  : "bg-white/95 text-black border-gray-200"
              }`}
            >
              Return back to preview
              <span
                className={`absolute w-2 h-2 rotate-45 top-1/2 -translate-y-1/2 -right-1 border-t border-r ${
                  theme === "dark"
                    ? "bg-black/80 border-white/20"
                    : "bg-white/95 border-gray-200"
                }`}
              />
            </span>
          )}
        </div>
      )}
    </>
  );
}
