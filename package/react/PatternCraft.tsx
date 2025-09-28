import React, { useEffect, useState } from "react";
import { gridPatterns } from "./data";
import type { gridPatternsType, patternNameType } from "./types";

export const PatternCraft = ({
  patternName,
  children,
  className = "",
  width="100%",
  height="100%",
}: {
  patternName: patternNameType;
  children?: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}) => {
  const [activePattern, setactivePattern] = useState<gridPatternsType | null>(
    null
  );
  useEffect(() => {
    if (patternName) {
      const targetPattern = gridPatterns.find(
        (item) => item.name === String(patternName)
      );

      if (targetPattern) {
        setactivePattern(targetPattern);
      }
    }
  }, [patternName]);

  return (
    activePattern && (
      <div
        className={`_patternContainer ${className}`}
        style={{ ...activePattern.style, width: width, height: height }}
      >
        {children}
      </div>
    )
  );
};
