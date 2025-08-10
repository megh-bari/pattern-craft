"use client";

import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import { APP_CONFIG } from "@/lib/constants";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme }: NavbarProps) {
  const isPatternDark = theme === "dark";

  return (
    <header className="z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/favicon.svg"
                alt="PatternCraft Logo"
                width={25}
                height={20}
                priority
                draggable={false}
                style={{ userSelect: "none" }}
              />
            </div>
            <h1
              className={`text-xl font-bold bg-gradient-to-r ${
                isPatternDark
                  ? "from-white to-gray-300"
                  : "from-gray-900 to-gray-600"
              } bg-clip-text text-transparent`}
            >
              Pattern Craft
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 sm:gap-4">
            <a
              href={APP_CONFIG.TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-sm p-1.5 sm:p-2 transition-all duration-300 ${
                isPatternDark
                  ? "text-white hover:text-neutral-300 hover:bg-white/20"
                  : "text-neutral-800 hover:text-neutral-600 hover:bg-neutral-100"
              }`}
              aria-label="Twitter"
            >
              <Twitter
                className="h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300"
                strokeWidth={1.5}
              />
            </a>

            <a
              href={APP_CONFIG.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-sm p-1.5 sm:p-2 transition-all duration-300 ${
                isPatternDark
                  ? "text-white hover:text-neutral-300 hover:bg-white/20"
                  : "text-neutral-800 hover:text-neutral-600 hover:bg-neutral-100"
              }`}
              aria-label="GitHub"
            >
              <Github
                className="h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
