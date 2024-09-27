/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { BaseColor } from "@/utils/common";
import useEpisode from "@/hooks/use-episode";
import EmbedAnime from "./EmbedAnime";
import ListEpisode from "./ListEpisode";
import Summary from "./Summary";
import Title from "./Title";
import Discover from "./discover";
import { smoothscroll } from "@/utils/funtions";
import { useEffect } from "react";

const Episode = () => {
  const {
    dataDetail,
    dataOneFilm,
    paramsPath,
    urlEmbedOneFilm,
    isLoadingDetail,
    isLoadingUrl,
    imageDetailFilm,
    episodeGroups,
    params,
    setParams,
    data,
  } = useEpisode();
  useEffect(() => {
    smoothscroll();
  }, []);
  return (
    <div>
      <Title
        title={dataDetail.title}
        type={dataDetail.type?.name || ""}
        currentEp={dataOneFilm.current_episode}
        slug={dataDetail.identifier}
      />
      <div
        className="pb-16"
        style={{
          borderBottom: `1px solid ${BaseColor.primary2}`,
        }}
      >
        <div className="container">
          <div className="flex flex-col xl:flex-row w-full h-full justify-between gap-6 mt-4">
            <EmbedAnime
              urlEmbedOneFilm={
                paramsPath.idEpisode
                  ? urlEmbedOneFilm
                  : dataDetail.trailer.embed_url
              }
              isLoading={isLoadingDetail || isLoadingUrl}
              episode={dataOneFilm.current_episode}
              nameEpisode={dataOneFilm.title}
              synopsis={dataOneFilm?.synopsis || dataDetail.synopsis || ""}
            />
            <Summary
              studios={dataDetail.studios || []}
              genres={dataDetail.genres || []}
              themes={dataDetail.themes || []}
              imageFilmUrl={imageDetailFilm}
              score={dataDetail.score}
              demographic={dataDetail.demographics}
              view={0}
              isLoading={isLoadingDetail}
              listTitle={dataDetail?.titles || []}
              status={dataDetail?.status || ""}
              aired={dataDetail?.aired?.string || ""}
              type={dataDetail?.type?.name || ""}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col xl:flex-row mt-16 gap-6">
          <div className="flex xl:w-[67%]">
            <ListEpisode
              episodeGroups={episodeGroups}
              setParams={setParams}
              params={params}
              data={data}
              idEpisode={paramsPath.idEpisode}
            />
          </div>
          <div className="xl:w-[33%]">
            <Discover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
