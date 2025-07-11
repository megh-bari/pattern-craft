"use client"

import { useEffect, useState } from "react"
import { Github, Twitter } from "lucide-react"

interface NavbarProps {
  theme: "light" | "dark"
}

export default function Navbar({ theme }: NavbarProps) {
  const isPatternDark = theme === "dark"
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
//Scroll event handler to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastScrollY || currentY < 10)
      setLastScrollY(currentY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] lg:w-[80%] transition-all duration-300 ease-in-out ${
        isPatternDark ? "bg-black/70 backdrop-blur-md" : "bg-white/80 backdrop-blur-md dark:bg-neutral-900/80"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} rounded-4xl shadow-md py-2`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span
            className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
              isPatternDark ? "text-white" : "text-neutral-800 dark:text-neutral-200"
            }`}
          >
            PatternCraft
          </span>
        </span>

        {/* Social Media Links : Github, X */}

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href="https://twitter.com/meghtrix"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-1.5 sm:p-2 transition-all ${
              isPatternDark ? "hover:bg-white/10" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
            aria-label="Twitter"
          >
            <Twitter
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                isPatternDark
                  ? "text-white hover:text-neutral-300"
                  : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
              }`}
              strokeWidth={1.5}
            />
          </a>
          <a
            href="https://github.com/megh-bari"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-1.5 sm:p-2 transition-all ${
              isPatternDark ? "hover:bg-white/10" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
            aria-label="GitHub"
          >
            <Github
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                isPatternDark
                  ? "text-white hover:text-neutral-300"
                  : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
              }`}
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
