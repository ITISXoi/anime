"use client";
import Modal from "@/components/ui/modal";
import useDetail from "@/hooks/use-detail";
import { smoothscroll } from "@/utils/funtions";
import { useEffect } from "react";
import Description from "./description";
import EmbedAnime from "./description/summary/list-description/EmbedAnime";
import Discover from "./discover";

const DetailAnime = () => {
  const {
    openModal,
    setOpenModal,
    episodeGroups,
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
  } = useDetail();
  useEffect(() => {
    smoothscroll();
  }, []);

  return (
    <>
      {isLoadingDetail ? (
        <div className="flex h-[500px] w-full justify-center items-center rounded-[10px] aspect-image">
          <span className="loader"></span>
        </div>
      ) : (
        <div>
          <Description
            dataDetail={dataDetail}
            imageFilmUrl={imageFilmUrl}
            isLoadingDetail={isLoadingDetail}
            setOpenModal={setOpenModal}
            episodeGroups={episodeGroups}
            dataEpisode={dataEpisode}
            isLoadingEpisode={isLoadingEpisode}
            paramsFilm={paramsFilm}
            setParamsFilm={setParamsFilm}
          />
          <Discover
            dataAllFilm={dataAllFilm}
            dataAllImage={dataAllImage}
            loadingAlsoLike={loadingAlsoLike}
            loadingImage={loadingImage}
          />
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            content={
              <EmbedAnime urlEmbedOneFilm={dataDetail?.trailer?.embed_url} />
            }
          />
        </div>
      )}
    </>
  );
};

export default DetailAnime;
