/* eslint-disable @next/next/no-img-element */
import { Genre, Studio, Theme, Title } from "@/actions";
import GroupDescription from "@/components/ui/group/GroupDesciption";
import OnlyDescription from "@/components/ui/group/OnlyDescription";
import { upperCaseFirstLetter } from "@/utils/funtions";

interface Props {
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  imageFilmUrl: string;
  score: number;
  demographic: [];
  view: number;
  isLoading: boolean;
  listTitle: Title[];
  status: string;
  aired: string;
  type: string;
}
const Summary = ({
  studios = [],
  genres = [],
  themes = [],
  imageFilmUrl,
  score = 0,
  demographic = [],
  isLoading = false,
  listTitle = [],
  status,
  aired,
  type,
}: Props) => {
  const listTitles = listTitle.map((item) => ({
    name: item.title,
  }));
  const handleBorderScore = () => {
    if (score < 6) {
      return "2px solid rgba(235, 87, 87)";
    }
    if (6 <= score && score < 8) {
      return "2px solid rgba(249, 171, 0)";
    }
    return "2px solid rgba(41, 180, 116)";
  };
  return (
    <div className="flex flex-col xs:flex-row xl:flex-col w-full xl:w-[33%] gap-6">
      <div
        className="w-[300px] xl:h-[411.55px] xl:w-[277.8px] 2xl:h-[471.84px] 2xl:w-[318.5px] relative aspect-image"
        style={{
          aspectRatio: 0.675,
        }}
      >
        {isLoading ? (
          <div
            className="flex h-full w-full justify-center items-center bg-primary-2 rounded-[10px]"
            style={{
              aspectRatio: 0.675,
            }}
          >
            <span className="loader"></span>
          </div>
        ) : (
          <img
            alt="image"
            src={imageFilmUrl || "/images/anisage-load.jpg"}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              height: "100%",
              width: "100%",
              aspectRatio: 0.675,
            }}
          />
        )}
        {score && score > 0 ? (
          <div className="absolute top-5 left-5">
            <div
              className="p-1 cursor-pointer change-color-secondary"
              style={{
                backgroundColor: "rgb(0, 0, 0, 0.4)",
                borderRadius: "50%",
                border: handleBorderScore(),
              }}
            >
              <p className="pl-[2px] pr-[2px]">{score?.toFixed(1)}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col h-full items-start gap-5 w-full">
        <div className="flex flex-col gap-1 flex-summary-auto">
          <GroupDescription group={listTitles} title="Titles" />
          <OnlyDescription type={type} title="Type" />
          <OnlyDescription type={aired} title="Aired" />
          <OnlyDescription type={upperCaseFirstLetter(status)} title="Status" />
          <GroupDescription group={studios} title="Studio" />
          <GroupDescription group={genres} title="Genre" />
          <GroupDescription group={themes} title="Theme" />
          <GroupDescription group={demographic} title="Demographic" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
