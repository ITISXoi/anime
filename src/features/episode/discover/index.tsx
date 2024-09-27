"use client";
import { IImage, useGetListFilm, useGetListImage } from "@/actions";
import ItemAlsoLike from "./ItemAlsoLike";

const Discover = () => {
  const { data: dataAllFilm = { items: [] } } = useGetListFilm({
    limit: 6,
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
  return (
    <>
      {dataAllFilm?.items?.length ? (
        <>
          <p className="text-2xl md:text-3xl lg:text-4xl">
            {"You may also like..."}
          </p>
          <div className="mt-4 -ml-3 -mr-3">
            <div className="flex flex-row flex-wrap">
              {dataAllFilm?.items?.map((item) => {
                const imageUrl = Array.isArray(dataAllImage)
                  ? dataAllImage.find(
                      (itemImage: IImage) => itemImage.film === item._id
                    )
                  : undefined;
                return (
                  <ItemAlsoLike
                    key={item._id}
                    item={item}
                    imageUrl={imageUrl?.url || item?.image?.url || ""}
                    loadingImage={loadingImage}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Discover;
