"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
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
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const isFavourite = (id: string) => favourites.includes(id);

  const clearFavourites = () => {
    setFavourites([]);
  };

  return {
    favourites,
    toggleFavourite,
    isFavourite,
    clearFavourites,
  };
}
