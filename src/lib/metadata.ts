import type { Metadata, Viewport } from "next";

export const siteConfig = {
  name: "PatternCraft",
  url: "https://patterncraft.store",
  title: "PatternCraft — 250+ Free CSS & Tailwind Background Patterns",
  description:
    "Explore 250+ free CSS and Tailwind background patterns, gradients, and effects. Preview each design and copy production-ready code for your next website.",
  creator: {
    name: "Megh Bari",
    url: "https://github.com/megh-bari",
    twitter: "@meghtrix",
  },
  ogImage: "/og-banner.png",
} as const;

const defaultKeywords = [
  "CSS background patterns",
  "Tailwind CSS backgrounds",
  "CSS gradients",
  "background patterns",
  "website backgrounds",
  "CSS snippets",
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator.name, url: siteConfig.creator.url }],
  creator: siteConfig.creator.name,
  publisher: siteConfig.name,
  category: "Web Development",
  keywords: defaultKeywords,
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
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PatternCraft CSS and Tailwind background pattern library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator.twitter,
  },
};

export const defaultViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = defaultKeywords,
  image = siteConfig.ogImage,
}: PageMetadataOptions): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.creator.twitter,
    },
  };
}
