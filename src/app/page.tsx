import Home from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AniSage - Free Anime Stream!",
  description:
    "Stream your favorite anime with AniSage, the ultimate destination for all things anime. Discover new shows, classics, and hidden gems—all in one place!",
  icons: {
    icon: "/images/anisage-fav.png",
  },
  robots: "index, follow",
  openGraph: {
    locale: "en_us",
    type: "website",
    title: "AniSage - Free Anime Stream!",
    description:
      "Stream your favorite anime with AniSage, the ultimate destination for all things anime. Discover new shows, classics, and hidden gems—all in one place!",
    url: "https://anime-theta-two.vercel.app/",
    siteName: "AniSage",
    images: {
      url: "https://anime-theta-two.vercel.app/images/anisage-banner.jpg",
      alt: "AniSage",
    },
  },
};

export default Home;
