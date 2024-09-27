import { getDetailEpisodeForSEO } from "@/actions/seo";
import Episode from "@/features/episode";
import { convertString } from "@/utils/funtions";
import type { Metadata } from "next";

type Props = {
  params: { idEpisode: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const idEpisode = params.idEpisode;
  const { props } = await getDetailEpisodeForSEO(params);

  return {
    title:
      `Watch ${props?.data?.film?.title} Episode ${props?.data?.current_episode} - Anisage`,
    description:
      `Watch ${props?.data?.title} on AniSage. ${
        convertString(props?.data?.synopsis || "", 250) ||
        convertString(props?.data?.film?.synopsis || "", 250)
      }` ||
      "Stream your favorite anime with AniSage, the ultimate destination for all things anime. Discover new shows, classics, and hidden gems—all in one place!",
    icons: {
      icon: "/images/anisage-fav.png",
    },
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      locale: "en_us",
      type: "video.episode",
      title:
        `Watch ${props?.data?.film?.title} Episode ${props?.data?.current_episode} - Anisage`,
      description:
        `Watch ${props?.data?.title} on AniSage. ${
          convertString(props?.data?.synopsis || "", 250) ||
          convertString(props?.data?.film?.synopsis || "", 250)
        }` ||
        "Stream your favorite anime with AniSage, the ultimate destination for all things anime. Discover new shows, classics, and hidden gems—all in one place!",
      url: `https://anime-theta-two.vercel.app/watch/${idEpisode}`,
      siteName: "AniSage",
      images: {
        url: `https://anime-theta-two.vercel.app/og-image/${props?.data?.film?.identifier}`,
        alt: "AniSage",
      },
    },
  };
}
export default Episode;
