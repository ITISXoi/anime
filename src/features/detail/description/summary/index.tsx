/* eslint-disable @next/next/no-img-element */
import { Genre, Studio, Theme, Title } from "@/actions";
import { BaseColor } from "@/utils/common";
import ImageDetail from "./ImageDetail";
import ListProduct from "./list-description";
import { Dispatch, SetStateAction } from "react";

interface Props {
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  imageFilmUrl: string;
  score: number;
  synopsis: string;
  demographic: [];
  view: number;
  isLoading: boolean;
  urlEmbedOneFilm: string;
  idEpisode: string;
  isLoadingEpisode: boolean;
  type: string;
  listTitle: Title[];
  status: string;
  aired: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  episodeGroups: {
    episodesStart: number;
    episodesEnd: number;
  }[];
}
const Summary = (props: Props) => {
  const {
    studios = [],
    genres = [],
    themes = [],
    imageFilmUrl,
    score = 0,
    synopsis,
    demographic = [],
    view = 0,
    isLoading = false,
    idEpisode,
    isLoadingEpisode = false,
    type,
    listTitle = [],
    status,
    aired,
    urlEmbedOneFilm,
    setOpenModal,
    episodeGroups,
  } = props;

  return (
    <div className="flex flex-col xl:flex-row w-full gap-6">
      <div className="flex flex-col gap-6 xl:w-[60%] 2xl:w-[50%] md:flex-row">
        <div className="flex min-w-[157px] w-[67%] md:w-[40%] relative aspect-image">
          <ImageDetail
            isLoading={isLoading}
            imageFilmUrl={imageFilmUrl}
            score={score}
          />
        </div>
        <div className="flex flex-col overflow-auto max-h-[505.09px] md:h-[398.23px] lg:h-[505.09px] xl:h-[388.26px] 2xl:h-[371px] items-start w-full md:w-[60%] lg:w-[67%] xl:w-[50%]">
          <ListProduct
            studios={studios}
            genres={genres}
            themes={themes}
            demographic={demographic}
            view={view}
            idEpisode={idEpisode}
            isLoadingEpisode={isLoadingEpisode}
            type={type}
            listTitle={listTitle}
            status={status}
            aired={aired}
            urlEmbedOneFilm={urlEmbedOneFilm}
            setOpenModal={setOpenModal}
            episodeGroups={episodeGroups}
          />
        </div>
      </div>
      <div
        className="w-[100%] xl:w-[40%] 2xl:w-[50%] h-[278px] xl:h-[388.26px] 2xl:h-[371px]"
        style={{
          backgroundColor: BaseColor.primary2,
          borderRadius: "10px",
          padding: "0px 17px 0px 20px",
          overflow: "auto",
        }}
      >
        <p
          className="mt-[20px] mb-[20px]"
          dangerouslySetInnerHTML={{
            __html: String(synopsis).replace(/\n/g, "<br>"),
          }}
        ></p>
      </div>
    </div>
  );
};

export default Summary;
