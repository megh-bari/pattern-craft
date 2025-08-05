"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useCopy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedId(null), 1000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      toast.error("Failed to copy code");
    }
  };

  const isCopied = (id: string) => copiedId === id;

  return {
    copyToClipboard,
    isCopied,
  };
}
