import { useGetListFilm, useGetListImage } from "@/actions";
import { listOption } from "@/utils/menu";
import { useState } from "react";

const useRecently = () => {
  const [tabSelect, setTabSelect] = useState(listOption[0].key);
  const [params, setParams] = useState({
    limit: 18,
    page: 1,
    filter: listOption[0].key,
  });

  const { data: dataAllFilm = { items: [] }, isLoading } =
    useGetListFilm(params);

  const {
    data: dataAllImage = [
      { url: "", film: "", path_image: "", expired_time: "" },
    ],
    isLoading: loadingImage,
  } = useGetListImage(params);

  const handleChangeTab = (item: string) => {
    setTabSelect(item);
    setParams({
      ...params,
      filter: item,
    });
  };

  return {
    tabSelect,
    setTabSelect,
    params,
    setParams,
    dataAllFilm,
    isLoading,
    dataAllImage,
    loadingImage,
    handleChangeTab,
  };
};

export default useRecently;
