import { Pattern } from "../../types/pattern";

export type PatternCategory = 'gradients' | 'geometric' | 'decorative' | 'effects';

// Dynamic pattern loaders for code splitting
export const loadPatternsByCategory = async (category: PatternCategory): Promise<Pattern[]> => {
  switch (category) {
    case 'gradients':
      const { gradientsPatterns } = await import('./gradients');
      return gradientsPatterns;
    case 'geometric':
      const { geometricPatterns } = await import('./geometric');
      return geometricPatterns;
    case 'decorative':
      const { decorativePatterns } = await import('./decorative');
      return decorativePatterns;
    case 'effects':
      const { effectsPatterns } = await import('./effects');
      return effectsPatterns;
    default:
      return [];
  }
};

// Load all patterns (for backward compatibility and initial load)
export const loadAllPatterns = async (): Promise<Pattern[]> => {
  const [gradients, geometric, decorative, effects] = await Promise.all([
    loadPatternsByCategory('gradients'),
    loadPatternsByCategory('geometric'),
    loadPatternsByCategory('decorative'),
    loadPatternsByCategory('effects'),
  ]);
  
  return [...gradients, ...geometric, ...decorative, ...effects];
};

// Get available categories
export const getPatternCategories = (): PatternCategory[] => {
  return ['gradients', 'geometric', 'decorative', 'effects'];
};

// Cache for loaded patterns
const patternCache = new Map<PatternCategory, Pattern[]>();

// Cached pattern loader
export const loadPatternsWithCache = async (category: PatternCategory): Promise<Pattern[]> => {
  if (patternCache.has(category)) {
    return patternCache.get(category)!;
  }
  
  const patterns = await loadPatternsByCategory(category);
  patternCache.set(category, patterns);
  return patterns;
};

// Export patterns array for backward compatibility (will be loaded dynamically)
export let gridPatterns: Pattern[] = [];

// Initialize patterns on demand
export const initializePatterns = async (): Promise<Pattern[]> => {
  if (gridPatterns.length === 0) {
    gridPatterns = await loadAllPatterns();
  }
  return gridPatterns;
};
