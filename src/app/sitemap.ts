import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  ];
}
