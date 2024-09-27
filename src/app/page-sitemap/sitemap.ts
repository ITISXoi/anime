import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anime-theta-two.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://anime-theta-two.vercel.app/catalog",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://anime-theta-two.vercel.app/contact",
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: "https://anime-theta-two.vercel.app/privacy-policy",
      lastModified: new Date(),
      priority: 0.1,
    },
  ];
}
