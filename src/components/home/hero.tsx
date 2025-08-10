"use client";

import { Github, Copy, Sparkles } from "lucide-react";
import { APP_CONFIG } from "@/lib/constants";

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
    <section className="container mx-auto py-6 lg:py-8 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <div className="mb-2 flex justify-center">
          <div className="flex justify-center mb-8">
            <div
              className={`group inline-flex items-center gap-2 px-4 py-2 ${
                isPatternDark
                  ? "bg-gray-800/60 border-gray-700/30 text-gray-300"
                  : "bg-white/60 border-gray-200/30 text-gray-700"
              } backdrop-blur-md border rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer`}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>5+ New Patterns</span>
              <span className="text-gray-400 dark:text-gray-500">·</span>
              <a
                href={APP_CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Read More
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-6 sm:mb-8">
          <h2
            className={`text-5xl sm:text-6xl lg:text-7xl font-semibold bg-gradient-to-r  ${
              isPatternDark
                ? "from-white via-gray-200 to-white"
                : "from-gray-900 via-gray-700 to-gray-900"
            } bg-clip-text text-transparent mb-6 leading-tight`}
          >
            Craft Beautiful
            <br />
            Background{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Patterns
            </span>
          </h2>
          <p
            className={`text-xl ${
              isPatternDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto mb-12 leading-relaxed`}
          >
            Discover and copy professional-grade CSS gradients and patterns.
            Perfect for modern web design projects.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 max-w-2xl mx-auto">
          <div
            className={`group w-full sm:w-auto flex items-center gap-3 px-6 py-4 ${
              isPatternDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/50 border-gray-200/50"
            }  backdrop-blur-sm border rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex-1 sm:flex-none`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-sm">
              <Copy className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold ${
                  isPatternDark ? "text-white" : "text-gray-900"
                } text-sm`}
              >
                One-Click Copy
              </h3>
              <p
                className={`text-xs ${
                  isPatternDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                CSS & Tailwind ready
              </p>
            </div>
          </div>

          <div
            className={`group w-full sm:w-auto flex items-center gap-3 px-6 py-4 ${
              isPatternDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/50 border-gray-200/50"
            } backdrop-blur-sm border rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex-1 sm:flex-none`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold ${
                  isPatternDark ? "text-white" : "text-gray-900"
                } text-sm`}
              >
                Live Preview
              </h3>
              <p
                className={`text-xs ${
                  isPatternDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                See before you copy
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className={`group relative px-8 py-3 ${
              isPatternDark
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-gray-900 text-white hover:bg-gray-800"
            } rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer`}
            onClick={handleBrowsePatternsClick}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <span
              className={`absolute inset-0 ${
                isPatternDark ? "bg-white" : "bg-gray-900"
              } rounded-xl group-hover:bg-transparent transition-colors duration-200`}
            ></span>
            <span
              className={`relative z-10 ${
                isPatternDark
                  ? "group-hover:text-white"
                  : "group-hover:text-white"
              } transition-colors duration-200`}
            >
              Browse Patterns
            </span>
          </button>

          <button
            className={`group px-8 py-3 border ${
              isPatternDark
                ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
                : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
            }   rounded-xl font-medium transition-all duration-200 relative overflow-hidden flex items-center gap-1 cursor-pointer`}
            onClick={() => {
              window.open(APP_CONFIG.CONTRIBUTING_URL, "_blank");
            }}
          >
            <Github className="h-4 sm:h-5 w-4 sm:w-5" />
            <span className="relative z-10">Contribute Here!</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
