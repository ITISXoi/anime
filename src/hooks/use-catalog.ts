/* eslint-disable react-hooks/exhaustive-deps */
import {
  useGetListFilm,
  useGetListImage,
  useGetOptionDemographic,
  useGetOptionGenres,
  useGetOptionThemes,
} from "@/actions";
import { getToggleSideBar } from "@/store/ducks/header/slice";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCatalog = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const toggleSideBarHeader = useSelector(getToggleSideBar);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [params, setParams] = useState({
    limit: 18,
    page: 1,
    keyword: keyword,
    genre: searchParams.get("genre") || "",
    theme: searchParams.get("theme") || "",
    demographic: searchParams.get("demographic") || "",
  });
  const [paramsMobile, setParamsMobile] = useState({
    genre: params.genre || "",
    theme: params.theme || "",
    demographic: params.demographic || "",
  });
  const {
    data: dataAllFilm = { items: [], page: "1", pageSize: 10, total: 0 },
    isLoading,
  } = useGetListFilm(params);
  const {
    data: dataAllImage = [
      { url: "", film: "", path_image: "", expired_time: "" },
    ],
    isLoading: loadingImage,
  } = useGetListImage(params);
  const {
    data: dataOptionGenres = [
      {
        _id: "",
        name: "",
        type: "",
        status: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      },
    ],
  } = useGetOptionGenres();
  const {
    data: dataOptionThemes = [
      {
        _id: "",
        name: "",
        type: "",
        status: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      },
    ],
  } = useGetOptionThemes();
  const {
    data: dataOptionDemographic = [
      {
        _id: "",
        name: "",
        type: "",
        status: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      },
    ],
  } = useGetOptionDemographic();

  let valueAllGenres = [
    {
      value: "",
      label: "All Genres",
    },
  ];
  const optionGenres = [
    ...valueAllGenres,
    ...dataOptionGenres.map((item) => ({
      value: item._id,
      label: item.name,
    })),
  ];

  let valueAllThemes = [
    {
      value: "",
      label: "All Themes",
    },
  ];
  const optionThemes = [
    ...valueAllThemes,
    ...dataOptionThemes.map((item) => ({
      value: item._id,
      label: item.name,
    })),
  ];

  let valueAllDemographic = [
    {
      value: "",
      label: "All Demographics",
    },
  ];
  const optionDemographics = [
    ...valueAllDemographic,
    ...dataOptionDemographic.map((item) => ({
      value: item._id,
      label: item.name,
    })),
  ];

  useEffect(() => {
    setParams({
      ...params,
      keyword: keyword,
    });
  }, [keyword]);

  useEffect(() => {
    if (toggleSideBarHeader) {
      setToggleSideBar(false);
    }
  }, [toggleSideBarHeader]);

  return {
    params,
    setParams,
    dataAllFilm,
    isLoading,
    dataAllImage,
    loadingImage,
    optionGenres,
    optionThemes,
    optionDemographics,
    toggleSideBar,
    setToggleSideBar,
    paramsMobile,
    setParamsMobile,
  };
};

export default useCatalog;
