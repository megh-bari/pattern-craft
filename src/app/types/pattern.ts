import type { CSSProperties } from "react"

export interface Pattern {
  id: string
  name: string
  category: 'gradients' | 'geometric' | 'decorative' | 'effects'
  theme?: 'light' | 'dark'
  description?: string
  badge?: "New" | " "
  style: CSSProperties
  code: string
}