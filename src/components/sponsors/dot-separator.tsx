interface DotSeparatorProps {
  theme: "light" | "dark";
}

function DotSeparator({ theme }: DotSeparatorProps) {
  const isPatternDark = theme === "dark";

  return (
    <div className="flex items-center justify-center">
      <div
        className={`transition-colors duration-300
          h-px w-6
          md:h-6 md:w-px
          ${isPatternDark ? "bg-gray-600" : "bg-gray-300"}
        `}
      />
    </div>
  );
}

export default DotSeparator;
