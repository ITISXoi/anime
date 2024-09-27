import {
  useGetDetailFilm,
  useGetEpisodeAllFilm,
  useGetImageFilm,
  useGetListFilm,
  useGetListImage,
} from "@/actions";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useDetail = () => {
  const params = useParams<{ identifier: string }>();
  const idIdentifier = params.identifier;
  const [openModal, setOpenModal] = useState(false);
  const episodesPerGroup = 100;
  const [episodeGroups, setEpisodeGroups] = useState<
    {
      episodesStart: number;
      episodesEnd: number;
    }[]
  >([]);
  const [paramsFilm, setParamsFilm] = useState({
    id: idIdentifier,
    page: 1,
    limit: 100,
  });
  const { data: dataDetail, isLoading: isLoadingDetail } = useGetDetailFilm(
    String(idIdentifier)
  );

  if (dataDetail?.code === 400) {
    notFound();
  }

  const { data: imageFilmUrl = "" } = useGetImageFilm(String(idIdentifier));

  const {
    data: dataEpisode = { items: [], total: 0 },
    isLoading: isLoadingEpisode,
  } = useGetEpisodeAllFilm(paramsFilm);

  const { data: dataAllFilm = { items: [] }, isLoading: loadingAlsoLike } =
    useGetListFilm({
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

  useEffect(() => {
    const groups = [];
    for (let i = 0; i < Math.ceil(dataEpisode.total / episodesPerGroup); i++) {
      const episodesStart = i * episodesPerGroup + 1;
      const episodesEnd = Math.min(
        episodesStart + episodesPerGroup - 1,
        dataEpisode.total
      );
      groups.push({ episodesStart, episodesEnd });
    }
    setEpisodeGroups(groups);
  }, [dataEpisode.total]);

  return {
    idIdentifier,
    openModal,
    setOpenModal,
    episodeGroups,
    setEpisodeGroups,
    paramsFilm,
    setParamsFilm,
    dataDetail,
    isLoadingDetail,
    imageFilmUrl,
    dataEpisode,
    isLoadingEpisode,
    dataAllFilm,
    dataAllImage,
    loadingAlsoLike,
    loadingImage,
  };
};

export default useDetail;
