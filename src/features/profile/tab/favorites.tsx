import { IImage, useGetListFilm, useGetListImage } from "@/actions";
import EmptyIcon from "@/assets/icons/empty";
import ItemRecently from "@/components/ui/item-film/ItemRecently";
import Pagination from "@/components/ui/pagination/pagination";
import { useState } from "react";

const Favorites = () => {
  const [params, setParams] = useState({
    limit: 18,
    page: 1,
  });

  const { data: dataAllFilm = { items: [], total: 0 }, isLoading } =
    useGetListFilm(params);

  const {
    data: dataAllImage = [
      { url: "", film: "", path_image: "", expired_time: "" },
    ],
    isLoading: loadingImage,
  } = useGetListImage(params);

  return (
    <>
      {isLoading ? (
        <div className="flex h-[200px] w-full justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="container">
          {dataAllFilm?.items?.length ? (
            <>
              <div className="flex flex-row flex-wrap -mr-3 -ml-3">
                {dataAllFilm?.items?.map((item: any) => {
                  const imageUrl = Array.isArray(dataAllImage)
                    ? dataAllImage.find(
                        (itemImage: IImage) => itemImage.film === item._id
                      )
                    : undefined;
                  return (
                    <ItemRecently
                      key={item._id}
                      item={item}
                      imageUrl={imageUrl?.url || item?.image?.url || ""}
                      loadingImage={loadingImage}
                    />
                  );
                })}
              </div>
              <div className="flex w-full justify-center mt-10">
                <Pagination
                  totalItem={dataAllFilm?.total || 0}
                  numberPage={params.page}
                  setNumberPage={(e: number) =>
                    setParams({ ...params, page: e })
                  }
                  setLimitPage={() => {}}
                  minIndexItemInPage={
                    dataAllFilm?.total > 0 ? (params.page - 1) * 10 + 1 : 0
                  }
                  maxIndexItemInPage={params.page * 10}
                  totalPage={dataAllFilm?.total / params.limit}
                  limit={params.limit}
                />
              </div>
            </>
          ) : (
            <div className="flex w-full justify-center mt-[180px]">
              <div className="flex-column-center">
                <EmptyIcon />
                <p>No data film here</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Favorites;
