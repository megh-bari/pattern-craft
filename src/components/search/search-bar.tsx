import { debounce } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useCallback, useRef } from "react";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (arg: string) => void;
  isPatternDark: boolean;
}

export function SearchBar({
  searchInput,
  setSearchInput,
  isPatternDark,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(
    debounce(() => {
      if (!inputRef.current) return;
      const inputValue = inputRef.current.value;
      setSearchInput(inputValue);
    }, 200),
    []
  );

  const clearSearch = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    setSearchInput("");
  };
  return (
    <div
      className={`w-full
    backdrop-blur-md shadow-sm border  rounded-xl mb-8 flex items-center px-2 ${
      isPatternDark
        ? "bg-black/20 border-white/10 hover:bg-black/30"
        : "bg-white/70 border-gray-200/30 hover:bg-white/80"
    }`}
    >
      <Search className="text-[4px] font-extralight text-gray-600 scale-75"></Search>
      <input
        type="text"
        className={`w-full h-auto py-2 px-2 text-sm  font-medium grow bg-transparent 
  outline-none rounded-xl ${
    isPatternDark
      ? "text-white placeholder-gray-400 focus:border-white/40"
      : " text-gray-600 placeholder-gray-500 focus:border-gray-300"
  }`}
        placeholder="Search..."
        ref={inputRef}
        onChange={() => handleSearch()}
      />
      {searchInput && (
        <button
          onClick={clearSearch}
          className="p-1 rounded-full hover:bg-gray-300/20 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4 text-gray-400" />
        </button>
      )}
    </div>
  );
}
