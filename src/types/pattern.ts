import type { CSSProperties } from "react";

export interface Pattern {
  id: string;
  name: string;
  category: "gradients" | "geometric" | "decorative" | "effects";
  description?: string;
  addedDate?: string; // Format: DD-MM-YYYY - "New" badge shows if within 45 days
  style: CSSProperties;
  code: string;
}
