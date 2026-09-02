import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type React from "react";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const siteUrl = "https://patterncraft.store";
const title = "PatternCraft — 250+ Free CSS & Tailwind Background Patterns";
const description =
  "Explore 250+ free CSS and Tailwind background patterns, gradients, and effects. Preview each design and copy production-ready code for your next website.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "PatternCraft",
  authors: [{ name: "Megh Bari", url: "https://github.com/megh-bari" }],
  creator: "Megh Bari",
  publisher: "PatternCraft",
  category: "Web Development",
  keywords: [
    "CSS background patterns",
    "Tailwind CSS backgrounds",
    "CSS gradients",
    "background patterns",
    "website backgrounds",
    "CSS snippets",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: [
      "xeqxMvzZZQWV43nn06hJDnwUVVaRfYRaMrYHy",
      "xeqxMvzZZQWV43nn06hJDnwUVVaRfYRaMrYHy-5qSCg",
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "PatternCraft",
    title,
    description,
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "PatternCraft CSS and Tailwind background pattern library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-banner.png"],
    creator: "@meghtrix",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "PatternCraft",
      description,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PatternCraft",
      url: `${siteUrl}/`,
      sameAs: ["https://github.com/megh-bari", "https://x.com/meghtrix"],
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#application`,
      name: "PatternCraft",
      url: `${siteUrl}/`,
      description,
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Web Design Tool",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser",
      inLanguage: "en-US",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Megh Bari",
        url: "https://github.com/megh-bari",
      },
      featureList: [
        "250+ CSS and Tailwind background patterns",
        "Live pattern previews",
        "Copy-ready CSS and Tailwind snippets",
      ],
      image: `${siteUrl}/og-banner.png`,
      screenshot: [
        `${siteUrl}/snapshots/screenshot-1.png`,
        `${siteUrl}/snapshots/screenshot-2.png`,
        `${siteUrl}/snapshots/screenshot-3.png`,
      ],
    },
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
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
