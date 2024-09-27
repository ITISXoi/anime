import { IResponeEpisode, ItemFilm } from "@/actions";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface Props {
  episodeGroups: {
    episodesStart: number;
    episodesEnd: number;
  }[];
  setParams: Dispatch<
    SetStateAction<{
      id: string;
      page: number;
      limit: number;
    }>
  >;
  params: {
    id: string;
    page: number;
    limit: number;
  };
  data:
    | IResponeEpisode
    | {
        items: never[];
        total: number;
      };
  idEpisode: string;
}

const ListEpisode = (props: Props) => {
  const { episodeGroups, setParams, params, data, idEpisode } = props;
  const router = useRouter();
  return (
    <>
      {episodeGroups.length ? (
        <>
          <div className="w-full">
            <p className="text-2xl md:text-3xl lg:text-4xl">Episodes</p>
            <div className="flex flex-row flex-wrap gap-4 mt-2">
              {episodeGroups.map((group, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setParams({
                      ...params,
                      page: index + 1,
                    });
                  }}
                >
                  <p
                    className={`text-secondary text-xl cursor-pointer hover:underline ${
                      index + 1 === params.page ? "underline" : ""
                    }`}
                  >
                    {group.episodesStart}-{group.episodesEnd}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-row flex-wrap gap-1 mt-4">
              {data.items?.map((item: ItemFilm, index: number) => (
                <div
                  key={item._id}
                  className={`w-[32.5%] xs:w-[24.3%] sm:w-[19.3%] md:w-[13.75%] lg:w-[90px] xl:w-[101px] 2xl:w-[116px] rounded-md px-4 py-2 cursor-pointer transition ${
                    item.identifier === idEpisode
                      ? "bg-secondary"
                      : "bg-episode"
                  }`}
                  onClick={() => {
                    router.push(`/watch/${item.identifier}`);
                  }}
                >
                  EP {(params.page - 1) * params.limit + index + 1}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ListEpisode;
