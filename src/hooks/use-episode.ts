/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  useGetDetailFilm,
  useGetEpisodeAll,
  useGetEpisodeOneFilm,
  useGetImageFilm,
  useGetURLEmbedOneFilm,
} from "@/actions";
import { defaultDataEpisode } from "@/utils/common";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useEpisode = () => {
  const [idFilm, setIdFilm] = useState("");
  const paramsPath = useParams<{ idEpisode: string }>();

  const { data: dataOneFilm = defaultDataEpisode } = useGetEpisodeOneFilm(
    paramsPath.idEpisode
  );
  if (dataOneFilm?.code === 400) {
    notFound();
  }
  const [params, setParams] = useState({
    id: paramsPath.idEpisode,
    page: 1,
    limit: 100,
  });

  const {
    data: dataDetail = {
      title: "",
      type: {
        _id: "",
        name: "",
        identifier: "",
        status: "",
      },
      identifier: "",
      trailer: { embed_url: "" },
      synopsis: "",
      studios: [],
      genres: [],
      themes: [],
      score: 0,
      titles: [],
      demographics: [],
      status: "",
      aired: {
        string: "",
      },
    },
    isLoading: isLoadingDetail,
  } = useGetDetailFilm(idFilm);

  const { data: imageFilmUrl = "", isLoading: isLoadingImageUrl } =
    useGetImageFilm(idFilm);

  const episodesPerGroup = 100;
  const [episodeGroups, setEpisodeGroups] = useState<
    {
      episodesStart: number;
      episodesEnd: number;
    }[]
  >([]);
  const { data = { items: [], total: 0 } } = useGetEpisodeAll(params);
  const { data: dataUrlEmbedOneFilm = "", isLoading: isLoadingUrl } =
    useGetURLEmbedOneFilm(paramsPath.idEpisode);

  const imageDetailFilm = typeof imageFilmUrl === "string" ? imageFilmUrl : "";

  const urlEmbedOneFilm =
    typeof dataUrlEmbedOneFilm === "string"
      ? dataUrlEmbedOneFilm
      : dataUrlEmbedOneFilm?.data || "";

  useEffect(() => {
    const groups = [];
    for (let i = 0; i < Math.ceil(data.total / episodesPerGroup); i++) {
      const episodesStart = i * episodesPerGroup + 1;
      const episodesEnd = Math.min(
        episodesStart + episodesPerGroup - 1,
        data.total
      );
      groups.push({ episodesStart, episodesEnd });
    }
    setEpisodeGroups(groups);
  }, [data.total]);

  useEffect(() => {
    if (dataOneFilm?.current_episode) {
      setParams({
        ...params,
        page: Math.ceil(dataOneFilm?.current_episode / 100),
      });
    }
  }, [dataOneFilm?.current_episode]);

  useEffect(() => {
    if (dataOneFilm?.film) {
      setIdFilm(dataOneFilm?.film?.identifier);
    }
  }, [dataOneFilm?.film]);

  return {
    idFilm,
    setIdFilm,
    dataDetail,
    dataOneFilm,
    paramsPath,
    urlEmbedOneFilm,
    isLoadingDetail,
    isLoadingUrl,
    isLoadingImageUrl,
    imageDetailFilm,
    episodeGroups,
    params,
    setParams,
    data,
  };
};

export default useEpisode;
