import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/watch/",
    },
    sitemap: [
      "https://anime-theta-two.vercel.app/sitemap.xml",
      "https://anime-theta-two.vercel.app/page-sitemap.xml",
      "https://anime-theta-two.vercel.app/film-sitemap.xml",
    ],
  };
}
