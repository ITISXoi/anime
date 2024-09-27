"use client";
import { IFilm, IResponeEpisode } from "@/actions";
import { Dispatch, SetStateAction } from "react";
import Title from "./Title";
import RenderEpisode from "./render-episode";
import Summary from "./summary";

interface Props {
  dataDetail: IFilm | undefined;
  imageFilmUrl: string;
  isLoadingDetail: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  episodeGroups: {
    episodesStart: number;
    episodesEnd: number;
  }[];
  dataEpisode:
    | IResponeEpisode
    | {
        items: never[];
        total: number;
      };
  isLoadingEpisode: boolean;
  paramsFilm: {
    id: string;
    page: number;
    limit: number;
  };
  setParamsFilm: Dispatch<
    SetStateAction<{
      id: string;
      page: number;
      limit: number;
    }>
  >;
}

const Description = (props: Props) => {
  const {
    dataDetail,
    imageFilmUrl,
    isLoadingDetail = false,
    setOpenModal,
    episodeGroups,
    dataEpisode,
    isLoadingEpisode,
    paramsFilm,
    setParamsFilm,
  } = props;

  return (
    <div>
      <Title
        title={dataDetail?.title || ""}
        type={dataDetail?.type?.name || ""}
      />
      <div className="container">
        <div className="flex flex-col xl:flex-row w-full h-full items-center justify-between gap-6 mt-4">
          <Summary
            studios={dataDetail?.studios || []}
            genres={dataDetail?.genres || []}
            themes={dataDetail?.themes || []}
            imageFilmUrl={imageFilmUrl}
            score={dataDetail?.score || 0}
            synopsis={dataDetail?.synopsis || ""}
            demographic={dataDetail?.demographics || []}
            view={0}
            isLoading={isLoadingDetail}
            urlEmbedOneFilm={dataDetail?.trailer?.embed_url}
            idEpisode={dataEpisode?.items?.[0]?.identifier || ""}
            isLoadingEpisode={isLoadingEpisode}
            type={dataDetail?.type?.name || ""}
            listTitle={dataDetail?.titles || []}
            status={dataDetail?.status || ""}
            aired={dataDetail?.aired?.string || ""}
            setOpenModal={setOpenModal}
            episodeGroups={episodeGroups}
          />
        </div>
        <RenderEpisode
          isLoading={isLoadingEpisode}
          episodeGroups={episodeGroups}
          setParams={setParamsFilm}
          params={paramsFilm}
          data={dataEpisode}
        />
      </div>
    </div>
  );
};

export default Description;
