import type { MetadataRoute } from "next";

const siteUrl = "https://patterncraft.store";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/og-banner.png`],
    },
  ];
}
