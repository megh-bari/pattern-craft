"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface FavoritesContextType {
  favourites: string[];
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
  clearFavourites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favourites: [],
  toggleFavourite: () => {},
  isFavourite: () => false,
  clearFavourites: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>([]);

  // Load favourites on mount
  useEffect(() => {
    const stored = localStorage.getItem("favourite");
    if (stored) {
      try {
        setFavourites(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing favourites from localStorage:", error);
        setFavourites([]);
      }
    }
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (id: string) => {
    setFavourites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((fav) => fav !== id);
      } else {
        try {
          const raw = localStorage.getItem("patternMetrics");
          const data = raw ? JSON.parse(raw) : {};
          const entry = data[id] || { copied: 0, favourited: 0, lastUsed: 0 };
          entry.favourited = (entry.favourited || 0) + 1;
          entry.lastUsed = Date.now();
          data[id] = entry;
          localStorage.setItem("patternMetrics", JSON.stringify(data));
        } catch {}
        return [...prev, id];
      }
    });
  };

  const isFavourite = (id: string) => favourites.includes(id);

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite, clearFavourites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
