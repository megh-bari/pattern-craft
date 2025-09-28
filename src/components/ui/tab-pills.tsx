"use client";

interface TabPillOption {
  value: string;
  label: string;
}

interface TabPillsProps {
  options: TabPillOption[];
  value: string;
  onChange: (value: string) => void;
  isPatternDark?: boolean;
  className?: string;
}

export default function TabPills({
  options,
  value,
  onChange,
  isPatternDark = false,
  className = ""
}: TabPillsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
            flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap
            text-sm font-medium transition-all duration-300 ease-in-out
            backdrop-blur-md shadow-lg border
            hover:scale-[1.02] hover:shadow-xl
            ${
              value === option.value
                ? isPatternDark
                  ? "bg-white/15 text-white border-white/20 shadow-lg"
                  : "bg-white/90 text-gray-900 border-gray-200/40 shadow-lg"
                : isPatternDark
                ? "bg-black/20 text-gray-300 border-white/10 hover:bg-black/30 hover:text-white hover:border-white/20"
                : "bg-white/60 text-gray-600 border-gray-200/30 hover:bg-white/80 hover:text-gray-900 hover:border-gray-300/40"
            }
          `}
        >
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
