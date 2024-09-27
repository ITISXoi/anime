import { IResponeEpisode, ItemFilm } from "@/actions";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isLoading: boolean;
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
}

const RenderEpisode = (props: Props) => {
  const { isLoading, episodeGroups, setParams, params, data } = props;
  const router = useRouter();
  return (
    <div className="mt-8">
      {isLoading || !episodeGroups.length ? null : (
        <p className="text-[24px] xs:text-[28px] md:text-[32px] xl:text-[36px]">
          Episodes
        </p>
      )}
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
        <>
          {data.items?.map((item: ItemFilm, index: number) => (
            <div
              key={item._id}
              className="w-[32.5%] xs:w-[24.3%] sm:w-[19.3%] md:w-[13.75%] lg:w-[90px] xl:w-[108px] 2xl:w-[124px] rounded-md px-4 py-2 cursor-pointer transition bg-episode"
              onClick={() => {
                router.push(`/watch/${item.identifier}`);
              }}
            >
              EP {(params.page - 1) * params.limit + index + 1}
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default RenderEpisode;
