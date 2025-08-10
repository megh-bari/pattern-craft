"use client";

interface FooterProps {
  theme: "light" | "dark";
}

export default function Footer({ theme }: FooterProps) {
  const isPatternDark = theme === "dark";

  return (
    <footer className="py-16 sm:py-20 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 transition-colors duration-300 ${
              isPatternDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span
              className={`bg-gradient-to-r ${
                isPatternDark
                  ? "from-white via-gray-200 to-white"
                  : "from-gray-900 via-gray-700 to-gray-900"
              } bg-clip-text text-transparent`}
            >
              Happy Crafting.
            </span>
          </h2>

          {/* Copyright */}
          <p
            className={`text-sm ${
              isPatternDark ? "text-gray-400/70" : "text-gray-600/70"
            } transition-colors duration-300`}
          >
            © {new Date().getFullYear()} PatternCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
