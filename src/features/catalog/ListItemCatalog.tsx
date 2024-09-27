"use client";
import { IFilm, IImage } from "@/actions/type";
import Pagination from "@/components/ui/pagination/pagination";
import { Dispatch, SetStateAction } from "react";
import EmptyIcon from "@/assets/icons/empty";
import ItemRecently from "@/components/ui/item-film/ItemRecently";

interface Props {
  dataAllFilm: IFilm[];
  total: number;
  params: {
    limit: number;
    page: number;
    keyword: string;
    genre: string;
    theme: string;
    demographic: string;
  };
  setParams: Dispatch<
    SetStateAction<{
      limit: number;
      page: number;
      keyword: string;
      genre: string;
      theme: string;
      demographic: string;
    }>
  >;
  dataAllImage: IImage[];
  loadingImage: boolean;
}

const ListItemCatalog = (props: Props) => {
  const {
    dataAllFilm = [],
    total,
    params,
    setParams,
    dataAllImage = [],
    loadingImage = false,
  } = props;
  return (
    <div className="container">
      {dataAllFilm.length ? (
        <>
          <div className="flex flex-row flex-wrap -mr-3 -ml-3">
            {dataAllFilm.map((item: any) => {
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
              totalItem={total}
              numberPage={params.page}
              setNumberPage={(e: number) => setParams({ ...params, page: e })}
              setLimitPage={() => {}}
              minIndexItemInPage={total > 0 ? (params.page - 1) * 10 + 1 : 0}
              maxIndexItemInPage={params.page * 10}
              totalPage={total / params.limit}
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
  );
};

export default ListItemCatalog;
