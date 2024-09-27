import { getNewItemForSEO } from "@/actions/seo";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { props } = await getNewItemForSEO({ page: 1, limit: 5 });
  const listSiteMapNewFilm = props?.data?.items?.map((item: any) => ({
    url: `https://anime-theta-two.vercel.app/${item?.identifier}`,
    lastModified: new Date(),
    priority: 1,
  }));

  return [
    {
      url: "https://anime-theta-two.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
    ...listSiteMapNewFilm,
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
