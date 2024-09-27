import { getDetailFilmForSEO } from "@/actions/seo";
import DetailAnime from "@/features/detail";
import { convertString } from "@/utils/funtions";
import type { Metadata } from "next";

type Props = {
  params: { identifier: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const identifier = params.identifier;
  const { props } = await getDetailFilmForSEO(params);
  return {
    title: `AniSage | Free stream ${props?.data?.title || ""} english sub`,
    description:
      `Watch ${props?.data?.title} on AniSage. ${convertString(
        props?.data?.synopsis || "",
        250
      )}` ||
      "Stream your favorite anime with AniSage, the ultimate destination for all things anime. Discover new shows, classics, and hidden gems—all in one place!",
    icons: {
      icon: "/images/anisage-fav.png",
    },
    robots: "index, follow",
    openGraph: {
      locale: "en_us",
      type: "video.movie",
      title: `${props?.data?.title || ""}` || "AniSage - Free Anime Stream!",
      description:
        `Watch ${props?.data?.title} on AniSage. ${convertString(
          props?.data?.synopsis || "",
          250
        )}` ||
        "Stream your favorite anime with AniSage, the ultimate destination for all things anime. Discover new shows, classics, and hidden gems—all in one place!",
      url: `https://anime-theta-two.vercel.app/${identifier}`,
      siteName: "AniSage",
      images: {
        url: `https://anime-theta-two.vercel.app/og-image/${identifier}`,
        alt: "AniSage",
      },
    },
  };
}
export default DetailAnime;
