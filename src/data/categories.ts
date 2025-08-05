import { PATTERN_CATEGORIES } from "@/lib/constants";

export const categories = PATTERN_CATEGORIES;

export type CategoryId = (typeof PATTERN_CATEGORIES)[number]["id"];
