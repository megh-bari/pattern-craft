import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrwnsan.github.io/pattern-craft/"),
  title: "Pattern Craft - Modern Background Patterns & Gradients Snippets",
  description:
    "Create stunning websites with our curated collection of 100+ modern CSS background patterns and gradients for your websites and apps. Easily copy and paste into your next project. Crafted with modern CSS and Tailwind for seamless integration.",
  keywords: [
    // Primary keywords (focus on user intent)
    "css background patterns",
    "background patterns generator",
    "css gradients generator",
    "tailwind css backgrounds",
    "web design backgrounds",
    "modern ui patterns",
    "css background snippets",
    "gradient generator tool",

    // Long-tail keywords (better for ranking)
    "free css background patterns library",
    "responsive background patterns for websites",
    "modern geometric css patterns",
    "tailwind background pattern components",
    "css grid background patterns",
    "animated background patterns css",
    "minimalist website backgrounds",
    "professional web design patterns",

    // Problem-solving keywords
    "how to create css background patterns",
    "beautiful website background ideas",
    "css pattern library for developers",
    "ready to use background patterns",
    "copy paste css backgrounds",
    "website background design inspiration",

    // Background snippets keywords
    "background snippets",
    "background snippets tailwind",
    "background snippets css",
    "modern background snippets tailwind",
    "react background snippets",
    "code snippets background",
    "tailwind background snippets",
    "collection of modern background snippets",
    "collection of modern background snippets tailwind css",
    "best background css",
    "css background snippet",
    "snippet background",
    "snippets tailwind css",
    "snippets",

    // Modern background keywords
    "modern css background",
    "modern gradient background css",
    "modern background color css",
    "tailwind css modern background",

    // Background examples keywords
    "background css examples",
    "css background style examples",
    "tailwind css background image example",
    "tailwind css layout examples",

    // Beautiful background keywords
    "beautiful backgrounds snippet",
    "beautiful background css",
    "beautiful background tailwind",
    "beautiful gradient background tailwind",

    // Gradient background keywords
    "gradient background css",
    "gradient background",
    "gradient background tailwind",
    "tailwind background gradient",
    "best gradient background tailwind css",

    // Website background keywords
    "background for website",
    "background for react website",
    "react app background",
    "background for react js",
    "background for nextjs",
    "background animation next js",

    // Pattern keywords
    "background pattern",
    "background pattern design",
    "background pattern css",
    "background pattern for website",
    "background pattern tailwind",
    "background pattern tailwind css",
    "pattern background css",

    // Brand keywords
    "pattern craft",
    "pattern craft background",
    "patterncraft",
    "patterncraft background",

    // General keywords
    "tailwind css",
    "background css",
    "background tailwind css",

    // Primary keywords (high intent)
    "cool gradient backgrounds for websites",
    "free CSS background patterns",
    "unique website background designs",
    "modern gradient color backgrounds",
    "geometric backgrounds for websites",
    "decorative website background patterns",
    "website background effects",
    "stylish backgrounds for web design",

    // Long-tail keywords (highly targeted)
    "where to find cool gradient website backgrounds",
    "best sites for free CSS background patterns",
    "how to add gradients in Tailwind CSS",
    "trendy background effects for websites",
    "creative backgrounds for frontend projects",
    "tailwind-compatible gradient color ideas",
    "lightweight CSS background snippets for websites",
    "open-source background patterns for web developers",
    "free gradient palettes for web design",

    // LSI (related context keywords)
    "UI background resources",
    "frontend design assets",
    "background pattern collections",
    "Tailwind UI backgrounds",
    "free background textures",
    "web design pattern tools",
    "CSS design inspiration",
    "gradient pattern ideas",
    "website background tools",
    "design-ready gradients and patterns"
  ].join(", "),

  authors: [{ name: "Megh Bari", url: "https://github.com/megh-bari" }],
  creator: "Megh Bari",
  publisher: "Pattern Craft",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/pattern-craft/favicon.svg",
  },
  manifest: "/pattern-craft/site.webmanifest",
  openGraph: {
    title: "Pattern Craft - Modern Background Patterns & Gradients Snippets",
    description:
      "Explore a 100+ collection of handcrafted background patterns and gradients. Perfect for modern websites. Easy to use and customize.",
    url: "https://shrwnsan.github.io/pattern-craft/",
    siteName: "Pattern Craft",
    type: "website",
    images: [
      {
        url: "/pattern-craft/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Pattern Craft – Modern Background Patterns and Gradients Snippets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Craft - Modern Background Patterns & Gradients Snippets",
    description:
      "100+ curated CSS background patterns and gradients. Tailwind CSS ready, responsive, and free to use. Perfect for modern web design.",
    images: ["/pattern-craft/og-banner.png"],
    creator: "@meghtrix",
    site: "@meghtrix",
  },
  alternates: {
    canonical: "https://shrwnsan.github.io/pattern-craft/",
  },

  classification: "Web Development, CSS Tools, Design Resources",

  // Additional SEO enhancements
  category: [
    "Web Development Tools",
    "Frontend Development",
    "CSS Tools",
    "UI Design Resources",
    "Background Patterns",
    "Gradients Generator",
    "Tailwind CSS Resources",
    "Web Design Assets",
    "Open Source Tools",
    "Developer Productivity",
    "Creative Coding",
    "Design Inspiration",
    "Code Snippets",
    "Modern Web Design",
    "Responsive Design"
  ].join(", "),


  // Add app-specific metadata
  applicationName: "PatternCraft",

  // Schema.org structured data hints
  other: {
    "application-name": "PatternCraft",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PatternCraft",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",



    // Additional meta tags for better discovery
    "google-site-verification": "xeqxMvzZZQWV43nn06hJDnwUVVaRfYRaMrYHy",

    // Rich snippets hints
    "article:author": "Megh Bari",
    "article:publisher": "https://github.com/megh-bari",
    "article:section": "Web Development",
    "article:tag": "CSS, Background Patterns, Gradients, Web Design",
    "og:updated_time": new Date().toISOString(),
    "og:locale": "en_US",
    "og:type": "website",

    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "copyright": "© 2025 Megh Bari. All rights reserved.",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* og image */}
        <meta property="og:image" content="https://shrwnsan.github.io/pattern-craft/og-banner.png" />
        <meta name="twitter:image" content="https://shrwnsan.github.io/pattern-craft/og-banner.png" />

        {/* <meta property="og:image" content="https://patterncraft.fun/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:image" content="https://patterncraft.fun/twitter-image.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" /> */}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Pattern Craft",
              "url": "https://shrwnsan.github.io/pattern-craft/"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Pattern Craft",
              "description": "Modern CSS background patterns and gradients generator",
              "url": "https://shrwnsan.github.io/pattern-craft/",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "author": {
                "@type": "Person",
                "name": "Megh Bari",
                "url": "https://github.com/megh-bari"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PatternCraft",
                "url": "https://shrwnsan.github.io/pattern-craft/"
              },
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "keywords": "CSS, background patterns, gradients, web design, tailwind css",
              "softwareVersion": "2.0.0",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://github.com/megh-bari",
                "https://x.com/meghtrix",
                "https://shrwnsan.github.io/pattern-craft/"
              ],
              "featureList": [
                "100+ CSS and Tailwind background patterns",
                "Gradient, geometric, decorative, and effect-based styles",
                "Copy-paste ready snippets for developers"
              ],
              "browserRequirements": "Requires modern browser with CSS3 support",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": { "@type": "http://schema.org/ViewAction" },
                "userInteractionCount": 5000
              }

            })
          }}
        />
        <link rel="manifest" href="/pattern-craft/site.webmanifest" />
      </head>
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
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}