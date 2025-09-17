"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Copy, ChevronUp } from "lucide-react";

interface SplitCopyProps {
  label?: string;
  onPrimary: () => void;
  options: { label: string; onClick: () => void }[];
  disabled?: boolean;
  dark?: boolean;
  extraButtonClasses?: string;
  forceDropUp?: boolean;
}

export default function SplitCopy({
  label = "Copy",
  onPrimary,
  options,
  disabled = false,
  dark = false,
  extraButtonClasses = "",
  forceDropUp = false,
}: SplitCopyProps) {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const estimatedMenuHeight = 96;
    setDropUp(forceDropUp || spaceBelow < estimatedMenuHeight);
  }, [open, forceDropUp]);

  const primaryLight = "bg-white/95 hover:bg-white text-black border-0";
  const primaryDark = "bg-gray-900/90 hover:bg-gray-900 text-white";

  const splitLeft = `${dark ? primaryDark : primaryLight} rounded-r-none px-3 ${extraButtonClasses}`;
  const splitRight = `${dark ? "bg-black/20 hover:bg-black/30 text-white border-white/20" : "bg-white/95 hover:bg-white text-black"} rounded-l-none px-2 ${extraButtonClasses}`;

  return (
    <div ref={rootRef} className="relative inline-flex">
      <Button size="sm" onClick={onPrimary} disabled={disabled} className={splitLeft}>
        <Copy className="h-3 w-3 mr-1" />
        {label}
      </Button>
      <Button size="sm" variant="secondary" onClick={() => setOpen((v) => !v)} className={splitRight}>
        <ChevronUp className="h-3 w-3" />
      </Button>
      {open && (
        <div className={`absolute right-0 ${dropUp ? "bottom-full mb-1" : "top-full mt-1"} min-w-40 z-[9999] rounded-md shadow-lg border ${dark ? "bg-black/70 border-white/15" : "bg-white/95"}`}>
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
