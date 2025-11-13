"use client";

import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

interface StyledTabOption {
  id: string;
  label: string;
  content?: ReactNode;
}

interface StyledTabsListProps {
  options: StyledTabOption[];
  value: string;
  onValueChange: (value: string) => void;
  isPatternDark?: boolean;
  gridCols?: string;
  className?: string;
  alwaysHorizontal?: boolean;
}

export function StyledTabsList({
  options,
  isPatternDark = false,
  gridCols = "grid-cols-2",
  className = "",
  alwaysHorizontal = false
}: StyledTabsListProps) {
  return (
    <TabsList
      className={`
        ${gridCols}
        w-full h-auto p-1.5
        backdrop-blur-md shadow-lg border
        rounded-xl transition-all duration-300
        ${
          isPatternDark
            ? "bg-black/20 border-white/10 hover:bg-black/30"
            : "bg-white/70 border-gray-200/30 hover:bg-white/80"
        }
        ${className}
      `}
    >
      {options.map((option) => (
        <TabsTrigger
          key={option.id}
          value={option.id}
          className={`
            ${alwaysHorizontal ? 'flex flex-row' : 'flex flex-col sm:flex-row'} items-center justify-center gap-1 sm:gap-2 
            py-2.5 px-2 sm:px-3 lg:px-4
            text-xs sm:text-sm font-medium
            rounded-lg
            transition-all duration-300 ease-in-out
            min-h-[44px] sm:min-h-[40px]
            relative overflow-hidden
            group
            ${
              isPatternDark
                ? `data-[state=active]:bg-white/10 data-[state=active]:text-white 
                   data-[state=active]:shadow-lg data-[state=active]:border 
                   data-[state=active]:border-white/20 data-[state=active]:backdrop-blur-sm
                   data-[state=inactive]:text-gray-300 
                   data-[state=inactive]:hover:text-white
                   data-[state=inactive]:hover:bg-white/5`
                : `data-[state=active]:bg-white/90 data-[state=active]:text-gray-900 
                   data-[state=active]:shadow-lg data-[state=active]:border 
                   data-[state=active]:border-gray-200/40 data-[state=active]:backdrop-blur-sm
                   data-[state=inactive]:text-gray-600 
                   data-[state=inactive]:hover:text-gray-900
                   data-[state=inactive]:hover:bg-white/40`
            }
          `}
        >
          <div
            className={`
              absolute inset-0 rounded-lg opacity-0 
              data-[state=active]:opacity-100 transition-all duration-300
              ${
                isPatternDark
                  ? "bg-gradient-to-br from-white/15 to-white/5"
                  : "bg-gradient-to-br from-white/95 to-white/80"
              }
            `}
          />
          <span className="font-medium z-10 text-center leading-tight">
            {option.label}
          </span>
          <div
            className={`
              absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
              rounded-full transition-all duration-300 
              group-data-[state=active]:w-8
              ${isPatternDark ? "bg-white/60" : "bg-primary"}
            `}
          />
        </TabsTrigger>
      ))}
    </TabsList>
  );
}

interface StyledTabsProps {
  options: StyledTabOption[];
  value: string;
  onValueChange: (value: string) => void;
  isPatternDark?: boolean;
  gridCols?: string;
  className?: string;
  children?: ReactNode;
}

export function StyledTabs({
  options,
  value,
  onValueChange,
  isPatternDark = false,
  gridCols = "grid-cols-2",
  className = "",
  children
}: StyledTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={onValueChange}
      className={`w-full ${className}`}
    >
      <StyledTabsList
        options={options}
        value={value}
        onValueChange={onValueChange}
        isPatternDark={isPatternDark}
        gridCols={gridCols}
      />
      {children}
    </Tabs>
  );
}
