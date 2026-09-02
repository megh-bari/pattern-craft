import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type React from "react";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import {
  defaultMetadata,
  defaultViewport,
} from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-background text-foreground antialiased min-h-screen flex items-center justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
