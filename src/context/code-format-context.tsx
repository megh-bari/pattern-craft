"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CodeFormat } from "@/utils/code-converter";

interface CodeFormatContextType {
  selectedFormat: CodeFormat;
  setSelectedFormat: (format: CodeFormat) => void;
}

const CodeFormatContext = createContext<CodeFormatContextType | undefined>(undefined);

export function CodeFormatProvider({ children }: { children: ReactNode }) {
  const [selectedFormat, setSelectedFormat] = useState<CodeFormat>('react');

  // Load selected format on mount
  useEffect(() => {
    const stored = localStorage.getItem("code-format");
    if (stored && (stored === 'react' || stored === 'vue')) {
      setSelectedFormat(stored as CodeFormat);
    }
  }, []);

  // Save selected format to localStorage
  useEffect(() => {
    localStorage.setItem("code-format", selectedFormat);
  }, [selectedFormat]);

  return (
    <CodeFormatContext.Provider value={{ selectedFormat, setSelectedFormat }}>
      {children}
    </CodeFormatContext.Provider>
  );
}

export function useCodeFormat() {
  const context = useContext(CodeFormatContext);
  if (context === undefined) {
    throw new Error('useCodeFormat must be used within a CodeFormatProvider');
  }
  return context;
}
