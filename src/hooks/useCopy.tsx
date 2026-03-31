"use client";

import { Pattern } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

interface CopiedState {
  id: string;
  type: "react" | "vanilla";
}

export function useCopy() {
  const [copiedState, setCopiedState] = useState<CopiedState | null>(null);

  const copyToClipboard = async (pattern: Pattern, vanilla = false) => {
    try {
      let textToCopy = pattern.code;

      if (vanilla) {
        const el = document.createElement("div");
        Object.assign(el.style, {
          minHeight: "100vh",
          width: "100%",
          position: "relative",
        });
        const containerStyle = el.getAttribute("style") || "";

        const bg = document.createElement("div");
        Object.assign(bg.style, {
          position: "absolute",
          inset: "0",
          zIndex: "0",
          ...pattern.style,
        });
        const bgStyle = bg.getAttribute("style") || "";

        textToCopy = `
<div style="${containerStyle}">
  <div style="${bgStyle}"></div>
</div>
        `.trim();
      }

      await navigator.clipboard.writeText(textToCopy);
      setCopiedState({ id: pattern.id, type: vanilla ? "vanilla" : "react" });
      toast.success("Code copied!");
      setTimeout(() => setCopiedState(null), 1000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy code");
    }
  };

  const isCopied = (id: string, type: "react" | "vanilla" = "react") =>
    copiedState?.id === id && copiedState?.type === type;

  return {
    copyToClipboard,
    isCopied,
  };
}
