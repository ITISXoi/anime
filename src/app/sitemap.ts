import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anime-theta-two.vercel.app/page-sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://anime-theta-two.vercel.app/film-sitemap.xml",
      lastModified: new Date(),
    },
  ];
}
