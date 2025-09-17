"use client";

import { useState } from "react";
import { Button } from "./button";
import { Copy, ChevronDown } from "lucide-react";

interface SplitCopyProps {
  label?: string;
  onPrimary: () => void;
  options: { label: string; onClick: () => void }[];
  disabled?: boolean;
  dark?: boolean;
}

export default function SplitCopy({
  label = "Copy",
  onPrimary,
  options,
  disabled = false,
  dark = false,
}: SplitCopyProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex">
      <Button
        size="sm"
        onClick={onPrimary}
        disabled={disabled}
        className={`${disabled ? "bg-gray-700 hover:bg-gray-800 text-white" : "bg-gray-900/90 hover:bg-gray-900 text-white"} rounded-r-none px-3`}
      >
        <Copy className="h-3 w-3 mr-1" />
        {label}
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => setOpen((v) => !v)}
        className={`${dark ? "bg-black/20 hover:bg-black/30 text-white border-white/20" : "bg-white/95 hover:bg-white text-black"} rounded-l-none px-2`}
      >
        <ChevronDown className="h-3 w-3" />
      </Button>
      {open && (
        <div
          className={`absolute right-0 top-full mt-1 min-w-40 z-50 rounded-md shadow-lg border ${dark ? "bg-black/70 border-white/15" : "bg-white/95"}`}
        >
          <ul className="py-1">
            {options.map((opt, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    setOpen(false);
                    opt.onClick();
                  }}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${dark ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-gray-100"}`}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
