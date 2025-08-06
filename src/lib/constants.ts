export const PATTERN_CATEGORIES = [
  { id: "all", label: "All Patterns" },
  { id: "gradients", label: "Gradients" },
  { id: "geometric", label: "Geometric" },
  { id: "decorative", label: "Decorative" },
  { id: "effects", label: "Effects" },
  { id: "favourites", label: "Favourites" },
] as const;

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const;

export const SUPPORT_CONFIG = {
  UPI_ID: "barimegh21@okaxis",
  PAYEE_NAME: "Megh Bari",
  UPI_MSG: "Keep building cool stuff!",
  BUY_ME_COFFEE_URL: "https://coff.ee/meghdev",
} as const;

export const APP_CONFIG = {
  GITHUB_URL: "https://github.com/megh-bari/pattern-craft",
  TWITTER_URL: "https://twitter.com/meghtrix",
  CONTRIBUTING_URL: "https://github.com/megh-bari/pattern-craft#contributing",
} as const;
