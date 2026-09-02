import type { Metadata } from "next";

import HomePage from "@/components/home/home-page";
import { createPageMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      sameAs: [siteConfig.creator.url, "https://x.com/meghtrix"],
    },
    {
      "@type": "WebApplication",
      "@id": `${siteConfig.url}/#application`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      description: siteConfig.description,
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
        name: siteConfig.creator.name,
        url: siteConfig.creator.url,
      },
      featureList: [
        "250+ CSS and Tailwind background patterns",
        "Live pattern previews",
        "Copy-ready CSS and Tailwind snippets",
      ],
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      screenshot: [1, 2, 3].map(
        (number) => `${siteConfig.url}/snapshots/screenshot-${number}.png`,
      ),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
