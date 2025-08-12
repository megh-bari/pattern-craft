"use client";

import React, { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import {
  Heart,
  Coffee,
  Smartphone,
  Copy,
  Check,
  ChevronUp,
} from "lucide-react";

interface SupportDropdownProps {
  theme?: "light" | "dark";
}

import { SUPPORT_CONFIG } from "@/lib/constants";

const UPI_ID = SUPPORT_CONFIG.UPI_ID;
const PAYEE_NAME = SUPPORT_CONFIG.PAYEE_NAME;
const UPI_MSG = SUPPORT_CONFIG.UPI_MSG;

const SupportDropdown: React.FC<SupportDropdownProps> = ({
  theme = "light",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
      const textArea = document.createElement("textarea");
      textArea.value = UPI_ID;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleBuyMeCoffee = () => {
    window.open(
      SUPPORT_CONFIG.BUY_ME_COFFEE_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // UPI QR Code URL
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    PAYEE_NAME
  )}&tn=${encodeURIComponent(UPI_MSG)}&cu=INR`;

  return (
    <div ref={dropdownRef} className="fixed bottom-6 right-4 sm:right-6 z-50">
      {/* Dropdown Menu */}
      <div
        className={`
          absolute bottom-16 right-0 mb-2 w-[calc(100vw-2rem)] max-w-xs sm:w-72 md:w-64 lg:w-[18rem] rounded-xl backdrop-blur-md border shadow-xl
          transform transition-all duration-300 ease-out origin-bottom-right
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }
          ${
            theme === "dark"
              ? "bg-black/40 border-white/10"
              : "bg-white border-gray-300"
          }
        `}
      >
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          {/* Buy Me Coffee Button */}
          <button
            onClick={handleBuyMeCoffee}
            className={`
              w-full flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all duration-200 cursor-pointer
              ${
                theme === "dark"
                  ? "hover:bg-white/10 text-white/90 hover:text-white"
                  : "hover:bg-gray-300/50 text-gray-800 hover:text-gray-900"
              }
            `}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Coffee className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
            </div>
            <span className="font-medium text-sm sm:text-base">
              Buy Me Coffee
            </span>
          </button>

          {/* UPI Payment Section */}
          <div
            onClick={copyUpiId}
            className={`
              w-full flex flex-col items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all duration-200 cursor-pointer
              ${
                theme === "dark"
                  ? "hover:bg-white/10 text-white/90 hover:text-white"
                  : "hover:bg-gray-300/50 text-gray-800 hover:text-gray-900"
              }
            `}
          >
            <div className="flex items-center gap-2 w-full mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-sm sm:text-base">
                  UPI Payment
                </div>
                <div
                  className={`text-xs ${
                    theme === "dark" ? "text-white/60" : "text-gray-600"
                  }`}
                >
                  Scan QR or copy UPI ID
                </div>
              </div>
              <button
                onClick={copyUpiId}
                className="w-8 h-8 flex items-center justify-center rounded transition"
                title="Copy UPI ID"
                tabIndex={-1}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy
                    className={`w-4 h-4 ${
                      theme === "dark" ? "text-white/60" : "text-gray-500"
                    }`}
                  />
                )}
              </button>
            </div>
            <div className="bg-white p-2 rounded-lg  flex flex-col items-center">
              <QRCode
                value={upiUrl}
                size={120}
                bgColor="#fff"
                fgColor="#222"
              />
              <div className="mt-2 text-xs text-center text-gray-500">
                UPI ID:{" "}
                <span className="font-mono text-xs text-gray-800">
                  {UPI_ID}
                </span>
              </div>
              <div className="text-[11px] text-gray-500">
                Scan to pay with any UPI app
              </div>
            </div>
            {copied && (
              <div
                className={`
                px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm text-center
                ${
                  theme === "dark"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-green-100 text-green-700"
                }
              `}
              >
                UPI ID copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md border shadow-xl
          flex items-center justify-center transition-all duration-300
          ${
            theme === "dark"
              ? "bg-black/50 border-white/10 hover:bg-black/40"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}
        aria-label="Support options"
      >
        {isOpen ? (
          <ChevronUp
            className={`w-5 sm:w-6 h-5 sm:h-6 ${
              theme === "dark" ? "text-white/80" : "text-gray-600"
            }`}
          />
        ) : (
          <Heart
            className={`w-5 sm:w-6 h-5 sm:h-6 ${
              theme === "dark" ? "text-white/80" : "text-red-600"
            }`}
          />
        )}
      </button>
    </div>
  );
};

export default SupportDropdown;
