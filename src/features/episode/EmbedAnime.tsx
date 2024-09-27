/* eslint-disable @next/next/no-img-element */
import { BaseColor } from "@/utils/common";

const EmbedAnime = ({
  urlEmbedOneFilm,
  isLoading,
  episode,
  nameEpisode,
  synopsis,
}: {
  urlEmbedOneFilm: string;
  isLoading: boolean;
  episode: number | undefined;
  nameEpisode: string | undefined;
  synopsis: string;
}) => {
  return (
    <div className="w-full rounded-lg h-full xl:w-[67%]">
      {isLoading ? (
        <div className="flex h-full w-full aspect-video justify-center items-center bg-primary-2">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          {urlEmbedOneFilm ? (
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={urlEmbedOneFilm}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          ) : (
            <div className="w-full aspect-video">
              <img
                src={"/images/anisage-banner.jpg"}
                alt="Loading Thumbnail"
                className="relative w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </>
      )}
      <div className="flex flex-row mt-4 gap-1 w-full">
        {episode ? (
          <p className="text-[24px] xs:text-[28px] md:text-[32px] xl:text-[36px]">
            {`Episode ${episode}: `}
            {nameEpisode ? (
              <span className="text-[24px] xs:text-[28px] md:text-[32px] xl:text-[36px]">{`${nameEpisode}`}</span>
            ) : null}
          </p>
        ) : null}
      </div>
      <div
        className="w-full h-[180px] flex-description mt-4"
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

export default EmbedAnime;
