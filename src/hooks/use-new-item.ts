"use client";
import useGlobal from "@/hooks/use-global";
import { useState } from "react";
import "swiper/css";
import { Swiper as TypeSwiper } from "swiper/types";
import { useGetListFilm, useGetListImage } from "@/actions";

const useNewItem = () => {
  const { isTablet, isSmallTablet, isMobile } = useGlobal();
  const [swiper, setSwiper] = useState<TypeSwiper | null>(null);
  const { data: dataAllFilm, isLoading } = useGetListFilm({
    limit: 10,
    page: 1,
  });

  const {
    data: dataAllImage = [
      { url: "", film: "", path_image: "", expired_time: "" },
    ],
    isLoading: loadingImage,
  } = useGetListImage({
    limit: 18,
    page: 1,
  });

  const slidesPerView = () => {
    if (isMobile) {
      return 2;
    }
    if (isSmallTablet) {
      return 3;
    }
    if (isTablet) {
      return 4;
    }
    return 5;
  };
  return {
    swiper,
    setSwiper,
    dataAllFilm,
    isLoading,
    dataAllImage,
    loadingImage,
    slidesPerView,
  };
};

export default useNewItem;
