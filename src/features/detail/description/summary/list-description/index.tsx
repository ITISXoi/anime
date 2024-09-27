/* eslint-disable @next/next/no-img-element */
import { Genre, Studio, Theme, Title } from "@/actions";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { upperCaseFirstLetter } from "@/utils/funtions";
import GroupDescription from "@/components/ui/group/GroupDesciption";
import OnlyDescription from "@/components/ui/group/OnlyDescription";

interface Props {
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  demographic: [];
  view: number;
  idEpisode: string;
  isLoadingEpisode: boolean;
  type: string;
  listTitle: Title[];
  status: string;
  aired: string;
  urlEmbedOneFilm: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  episodeGroups: {
    episodesStart: number;
    episodesEnd: number;
  }[];
}
const ListProduct = (props: Props) => {
  const {
    studios,
    genres,
    themes,
    demographic,
    idEpisode,
    isLoadingEpisode = false,
    type,
    listTitle,
    status,
    aired,
    urlEmbedOneFilm,
    setOpenModal,
    episodeGroups = [],
  } = props;
  const router = useRouter();
  const listTitles = listTitle.map((item) => ({
    name: item.title,
  }));
  return (
    <>
      <GroupDescription group={listTitles} title="Titles" />
      <OnlyDescription type={type} title="Type" />
      <OnlyDescription type={aired} title="Aired" />
      <OnlyDescription type={upperCaseFirstLetter(status)} title="Status" />
      <GroupDescription group={studios} title="Studio" />
      <GroupDescription group={genres} title="Genre" />
      <GroupDescription group={themes} title="Theme" />
      <GroupDescription group={demographic} title="Demographic" />
      <div className="flex flex-row gap-2">
        {isLoadingEpisode || !episodeGroups.length ? null : (
          <div
            className="watch-now"
            onClick={() => {
              router.push(`/watch/${idEpisode}`);
            }}
          >
            <button className="button-watch-now" type={"button"}>
              <div className="flex flex-row gap-2 justify-center">
                <img alt="play" src="/images/play.png" width={20} height={10} />
                <p className="text-[#000000]">Watch now</p>
              </div>
            </button>
          </div>
        )}
        {urlEmbedOneFilm ? (
          <div className="play-trailer" onClick={() => setOpenModal(true)}>
            <button className="button-watch-now" type={"button"}>
              <div className="flex flex-row gap-2 justify-center">
                <img alt="play" src="/images/play.png" width={20} height={10} />
                <p className="text-[#000000]">Trailer</p>
              </div>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ListProduct;
