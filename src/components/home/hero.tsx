"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Copy, Eye, Code2, Zap } from "lucide-react";
import { APP_CONFIG } from "@/lib/constants";
import CarbonAd from "../ads/CarbonAds";

interface HeroProps {
  activePattern?: string | null;
  setActivePattern?: (pattern: string | null) => void;
  theme: "light" | "dark";
}

const handleBrowsePatternsClick = () => {
  document.getElementById("pattern-showcase")?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Hero({ theme }: HeroProps) {
  const isPatternDark = theme === "dark";

  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-12 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
          <a
            href={APP_CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Badge
              variant="secondary"
              className={`gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border ${isPatternDark
                ? "bg-black/40 border-white/20 text-white hover:bg-black/50"
                : "bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90"
                }`}
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="font-medium">5+ New Patterns</span>
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="hidden sm:inline-flex items-center">
                Read More
              </span>
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </a>
        </div>

        {/* Main heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 sm:mb-3">
            <span
              className={`font-medium transition-colors duration-300 ${isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"
                }`}
            >
              Craft Beautiful
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight">
            <span
              className={`bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 ${isPatternDark
                ? "from-neutral-100 via-slate-400 to-neutral-400"
                : "from-neutral-900 via-slate-500 to-neutral-500 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
                }`}
            >
              Patterns Backgrounds
            </span>
          </h2>
        </div>

        {/* Description */}
        <p
          className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed transition-colors duration-300 px-4 sm:px-0 ${isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
            }`}
        >
          Professional-grade background patterns and gradients. Easily copy the
          code and seamlessly integrate it into your projects.
          <span className="block">Crafted with modern CSS and Tailwind</span>
        </p>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto px-4 sm:px-0">
          <div
            className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto ${isPatternDark
              ? "bg-black/30 border-white/10 hover:bg-black/40"
              : "bg-white/70 border-gray-200/30 hover:bg-white/80"
              }`}
          >
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${isPatternDark ? "bg-violet-500/20" : "bg-violet-100"
                }`}
            >
              <Copy
                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${isPatternDark ? "text-violet-300" : "text-violet-600"
                  }`}
              />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold text-sm transition-colors duration-300 ${isPatternDark ? "text-white" : "text-gray-900"
                  }`}
              >
                One-Click Copy
              </h3>
              <p
                className={`text-xs transition-colors duration-300 ${isPatternDark ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Ready-to-use CSS code
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto ${isPatternDark
              ? "bg-black/30 border-white/10 hover:bg-black/40"
              : "bg-white/70 border-gray-200/30 hover:bg-white/80"
              }`}
          >
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${isPatternDark ? "bg-pink-500/20" : "bg-pink-100"
                }`}
            >
              <Eye
                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${isPatternDark ? "text-pink-300" : "text-pink-600"
                  }`}
              />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold text-sm transition-colors duration-300 ${isPatternDark ? "text-white" : "text-gray-900"
                  }`}
              >
                Live Preview
              </h3>
              <p
                className={`text-xs transition-colors duration-300 ${isPatternDark ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                See patterns in action
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <Button
            size="lg"
            className={`cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none ${isPatternDark
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-slate-950 hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              }`}
            onClick={() => {
              window.open(APP_CONFIG.CONTRIBUTING_URL, "_blank");
            }}
          >
            <Github className="h-4 sm:h-5 w-4 sm:w-5" />
            Contribute Here!
          </Button>
          <Button
            size="lg"
            className={`cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none ${isPatternDark
              ? "bg-slate-950 text-white hover:bg-slate-900"
              : "bg-white text-black hover:bg-gray-100"
              }`}
            onClick={handleBrowsePatternsClick}
          >
            <Code2 className="h-4 sm:h-5 w-4 sm:w-5" />
            Browse Patterns
          </Button>
        </div>


        {/* Sponsors Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 mx-auto px-4 sm:px-0">
          {/* Vercel Sponsor */}
          {/* Thanks to Vercel for sponsoring PatternCraft.fun! Check them out at: https://vercel.com/ */}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <p
              className={`text-sm sm:text-base font-medium transition-colors duration-300 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                }`}
            >
              Backed by Vercel
            </p>
            <span
              aria-label="Vercel Logo"
              className={`text-lg sm:text-xl font-bold transition-all duration-300 ${isPatternDark ? "text-white group-hover:text-gray-100" : "text-black group-hover:text-gray-800"
                }`}
            >
              ▲
            </span>
          </a>

          {/* Dot Separator */}
          <div className="flex items-center justify-center">
            <div
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isPatternDark ? "bg-gray-400" : "bg-gray-500"
                }`}
            />
          </div>

          {/* ShadcnBlocks Sponsor */}
          {/* Huge thanks to ShadcnBlocks for supporting PatternCraft.fun! Explore their blocks at: https://shadcnblocks.com/ */}
          <a
            href="https://shadcnblocks.com/"
            target="_blank"
            className="group transition-all duration-300 hover:scale-105"
          >
            {/* Logo + ShadcnBlocks */}
            <div className="flex items-center justify-center gap-2">
              <svg
                width="20"
                height="23"
                viewBox="0 0 78 90"
                className={`transition-all duration-300 ${isPatternDark ? "fill-white group-hover:fill-gray-100" : "fill-black group-hover:fill-gray-800"
                  }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M46.7305 4.50982L43.6252 2.72955V17.49L46.7305 19.2924V4.50982Z" />
                <path d="M52.9854 8.14811L49.8765 6.34937V21.1287L52.9854 22.9127V8.14811Z" />
                <path d="M59.1814 11.7684L56.0762 9.9881V24.7485L59.1814 26.5325V11.7684Z" />
                <path d="M6.04712 26.0179L9.15238 27.8019V17.246L6.04712 19.0262V26.0179Z" />
                <path d="M2.93874 24.2184V20.8651L0 22.5491L2.93874 24.2184Z" />
                <path d="M77.889 22.5895L74.7985 20.8056V24.3883L71.6895 26.1685V19.0253L68.6027 17.245V27.9123L65.4937 29.6962V15.3874L62.3293 13.548V28.3305L65.1162 29.959V59.8636L64.9645 59.9561L62.3293 58.4424V61.4921L59.1833 63.2724V56.5474L56.078 54.7079V65.0743L52.9875 66.9101V52.8681L49.8785 51.0324V68.6945L46.7325 70.4748V49.1932L43.6273 47.3537V72.2547L40.5183 74.1127V45.5172L39.0008 44.5105L39.06 14.8159L40.5183 15.7079V0.947497L38.8898 0L37.5795 0.736529V15.5562L34.4372 17.3364V2.57602L31.3283 4.35629V19.1199L28.2193 20.9186V6.1953L25.1325 7.97557V22.6989L21.968 24.4829V9.77771L18.8775 11.6135V26.2807L15.7685 28.1202V13.393L12.3005 15.4397V29.578L12.7743 29.8444L12.889 59.9528L15.7685 61.6405V58.2872L18.8775 56.4477V63.4799L21.968 65.2786V54.6082L25.1325 52.7132V67.0591L28.2193 68.8986V50.8772L31.3283 49.0377V70.6786L34.4372 72.481V47.1797L37.5795 45.3439V74.3168L39.0008 75.1533V75.0941V89.969L77.9445 67.477L78 22.5853L77.889 22.5895Z" />
              </svg>
              <p
                className={`text-sm sm:text-base font-medium transition-colors duration-300 ${isPatternDark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                  }`}
              >
                <span className="hidden sm:inline">shadcnblocks.com</span>
                <span className="sm:hidden">ShadcnBlocks</span>
              </p>
            </div>
            {/* Description */}
            <p
              className={`text-xs sm:text-sm transition-colors duration-300 ${isPatternDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                }`}
            >
              hundreds of extra blocks for shadcn/ui
            </p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 mx-auto px-4 sm:px-0">
          <CarbonAd />
        </div>
        
        {/* Stats */}
        <div
          className={`flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-6 pt-6 sm:pt-8 border-t transition-all duration-300 ${isPatternDark
            ? "border-white/20"
            : "border-gray-300 dark:border-gray-700"
            }`}
        >
          <div className="text-center">
            <div
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isPatternDark ? "text-white" : ""
                }`}
            >
              200+
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 ${isPatternDark ? "text-gray-300" : ""
                }`}
            >
              Patterns
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isPatternDark ? "text-white" : ""
                }`}
            >
              100%
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 ${isPatternDark ? "text-gray-300" : ""
                }`}
            >
              Free
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isPatternDark ? "text-white" : ""
                }`}
            >
              CSS
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 ${isPatternDark ? "text-gray-300" : ""
                }`}
            >
              & Tailwind
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
