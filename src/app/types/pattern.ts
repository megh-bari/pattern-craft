import type { CSSProperties } from "react"

export interface Pattern {
  id: string
  name: string
  category: 'gradients' | 'geometric' | 'decorative' | 'effects'
  description?: string
  badge?: "New" | " "
  style: CSSProperties
  code: string
}

// TODO: Make this more robust, e.g. by checking if the background color is in a dark color range
export function getPatternTheme({ id, style: { background } }: Pattern): 'dark' | 'light' {
  if (id.startsWith("dark-") ||
        (typeof background === "string" &&
          (background.includes("#0") ||
            background.includes("#1") ||
            background.includes("rgba(0,") ||
            background.includes("rgba(1,")))) {
    return "dark";
  }
  return "light";
}
