"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Eye, Sparkles, Star } from "lucide-react";
import { Pattern } from "@/types/pattern";
import { useCopy } from "@/hooks/useCopy";
import { useFavorites } from "@/context/favourites-context";

interface PatternCardProps {
  pattern: Pattern;
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  theme: "light" | "dark";
  activeMobileCard: string | null;
  setActiveMobileCard: (id: string | null) => void;
}

export default function PatternCard({
  pattern,
  activePattern,
  setActivePattern,
  theme,
  activeMobileCard,
  setActiveMobileCard,
}: PatternCardProps) {
  const { copyToClipboard, isCopied } = useCopy();
  const { toggleFavourite, isFavourite } = useFavorites();
  const isPatternDark = theme === "dark";

  const previewPattern = (patternId: string) => {
    setActivePattern(patternId === activePattern ? null : patternId);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const handleCardInteraction = (patternId: string) => {
    setActiveMobileCard(activeMobileCard === patternId ? null : patternId);
  };

  return (
    <div className="group relative">
      <div
        className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-300 ${
          activePattern === pattern.id
            ? "ring-2 ring-primary ring-offset-2"
            : ""
        } ${
          activeMobileCard === pattern.id
            ? "scale-[1.02] shadow-lg sm:scale-100"
            : "hover:shadow-lg hover:scale-[1.02]"
        }`}
        onClick={() => handleCardInteraction(pattern.id)}
      >
        {/* Favorite Button with Star Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite(pattern.id);
          }}
          className={`absolute top-2 left-2 z-10 p-2 rounded-full backdrop-blur-md shadow-lg border transition-all cursor-pointer duration-200 hover:scale-110 group/star ${
            isFavourite(pattern.id)
              ? isPatternDark
                ? "bg-yellow-500/20 border-yellow-400/30 text-yellow-400"
                : "bg-yellow-500/20 border-yellow-500/30 text-yellow-600"
              : isPatternDark
              ? "bg-black/20 border-white/20 text-white hover:bg-black/30 hover:border-white/30"
              : "bg-black/20 border-white/30 text-white hover:bg-black/30 hover:border-white/40"
          }`}
          title={
            isFavourite(pattern.id)
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          <Star
            className={`h-4 w-4 transition-all duration-200 ${
              isFavourite(pattern.id)
                ? "fill-current scale-110"
                : "group-hover/star:scale-110"
            }`}
          />
        </button>

        {/* Pattern style */}
        <div className="absolute inset-0" style={pattern.style} />

        {/* Badge */}
        {pattern.badge && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
            <Badge
              variant="secondary"
              className="gap-1 text-xs bg-background/80 backdrop-blur-sm border-border/50 px-2 py-1"
            >
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-600" />
              <span>{pattern.badge}</span>
            </Badge>
          </div>
        )}

        {/* Mobile View: Simple preview and copy buttons */}
        <div className="lg:hidden absolute bottom-2 left-2 right-2 z-10 flex justify-center gap-2 px-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              previewPattern(pattern.id);
              document.getElementById("trigger-preview-scroll")?.click();
            }}
            className="flex-1 bg-white/95 hover:bg-white text-black border-0 text-xs h-8"
          >
            <Eye className="h-3 w-3 mr-1" />
            {activePattern === pattern.id ? "Hide" : "Preview"}
          </Button>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(pattern.code, pattern.id);
            }}
            className={`flex-1 border-0 text-xs h-8 ${
              isCopied(pattern.id)
                ? "bg-gray-700 hover:bg-gray-800 text-white"
                : "bg-gray-900/90 hover:bg-gray-900 text-white"
            }`}
            disabled={isCopied(pattern.id)}
          >
            {isCopied(pattern.id) ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>

        {/* Desktop View: Hover overlay */}
        <div className="hidden lg:flex absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-4 drop-shadow-lg">
              {pattern.name}
            </h3>
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full xs:w-auto">
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  previewPattern(pattern.id);
                  document.getElementById("trigger-preview-scroll")?.click();
                }}
                className="cursor-pointer shadow-xl backdrop-blur-md bg-white/95 hover:bg-white text-black border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto"
              >
                <Eye className="h-3 w-3 mr-1" />
                {activePattern === pattern.id ? "Hide" : "Preview"}
              </Button>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(pattern.code, pattern.id);
                }}
                className={`cursor-pointer shadow-xl backdrop-blur-md gap-1 border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto ${
                  isCopied(pattern.id)
                    ? "bg-gray-700 hover:bg-gray-800 text-white border border-gray-500"
                    : "bg-gray-900/90 hover:bg-gray-900 text-white"
                }`}
                disabled={isCopied(pattern.id)}
              >
                {isCopied(pattern.id) ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
