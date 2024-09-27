"use client";
import { IFilmResponse, IImage } from "@/actions";
import { BaseColor } from "@/utils/common";
import ItemAlsoLike from "./ItemAlsoLike";

interface Props {
  dataAllFilm:
    | IFilmResponse
    | {
        items: never[];
      };
  dataAllImage: IImage[];
  loadingAlsoLike: boolean;
  loadingImage: boolean;
}

const Discover = (props: Props) => {
  const { dataAllFilm, dataAllImage, loadingAlsoLike, loadingImage } = props;
  return (
    <>
      {loadingAlsoLike ? null : (
        <>
          <div
            className="mt-16 pb-6"
            style={{
              borderBottom: `1px solid ${BaseColor.primary2}`,
            }}
          >
            <div className="container">
              <p className="text-2xl md:text-3xl lg:text-4xl">
                {"You may also like..."}
              </p>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-row flex-wrap -mr-3 -ml-3">
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
      )}
    </>
  );
};

export default Discover;
