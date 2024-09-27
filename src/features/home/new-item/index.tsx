"use client";
import { IFilm, IImage } from "@/actions/type";
import useNewItem from "@/hooks/use-new-item";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonNextSlide from "./swiper/ButtonNextSlide";
import ButtonPrevSlide from "./swiper/ButtonPrevSlide";
import ItemSwiper from "./swiper/ItemSwiper";

const NewItem = () => {
  const {
    swiper,
    setSwiper,
    dataAllFilm,
    isLoading,
    dataAllImage,
    loadingImage,
    slidesPerView,
  } = useNewItem();
  return (
    <div className="container mt-8 md:mt-12">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-[22px] sm:text-3xl md:text-4xl xl:text-[42px] font-thin">
          <span className="font-semibold">NEW ITEMS</span> OF THIS SECTION
        </p>
        <div className="flex flex-row gap-2">
          <ButtonPrevSlide swiper={swiper} />
          <ButtonNextSlide swiper={swiper} />
        </div>
      </div>
      {isLoading ? (
        <div className="flex h-[200px] w-full justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="flex flex-row gap-2 mt-8">
          <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={slidesPerView()}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {dataAllFilm?.items.map((item: IFilm) => {
              const imageUrl = Array.isArray(dataAllImage)
                ? dataAllImage.find(
                    (itemImage: IImage) => itemImage.film === item._id
                  )
                : undefined;
              return (
                <SwiperSlide key={item._id}>
                  <ItemSwiper
                    item={item}
                    imageUrl={imageUrl?.url || item?.image?.url || ""}
                    loadingImage={loadingImage}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default NewItem;
