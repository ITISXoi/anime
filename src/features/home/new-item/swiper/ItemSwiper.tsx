/* eslint-disable @next/next/no-img-element */
import { IFilm } from "@/actions/type";
import { BaseColor } from "@/utils/common";
import { convertNameItem, splitEpisode } from "@/utils/funtions";
import { CaretRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  item: IFilm;
  imageUrl: string;
  loadingImage: boolean;
}

const ItemSwiper = (props: Props) => {
  const { item, imageUrl, loadingImage } = props;
  const [onHover, setOnHover] = useState(false);
  const router = useRouter();

  const handleGotoDetail = (id: string) => {
    router.push(`/${id}`);
  };

  const handleBorderScore = () => {
    if (item?.score < 6) {
      return "2px solid rgba(235, 87, 87)";
    }
    if (6 <= item?.score && item?.score < 8) {
      return "2px solid rgba(249, 171, 0)";
    }
    return "2px solid rgba(41, 180, 116)";
  };

  return (
    <div className="flex flex-col gap-1 sm:w-[160px] md:w-[218px] xl:w-[205px] 2xl:w-[240px]">
      <div
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className="w-full relative cursor-pointer"
        onClick={() => handleGotoDetail(item.identifier)}
      >
        <img
          alt="image"
          src={
            loadingImage || !imageUrl ? "/images/anisage-load.jpg" : imageUrl
          }
          style={{
            borderRadius: "10px",
            minHeight: "230px",
            objectFit: "cover",
            aspectRatio: 0.675,
            width: "100%",
          }}
        />
        {item?.score && item?.score > 0 ? (
          <div className="absolute top-5 left-5">
            <div
              className="p-1 cursor-pointer change-color-secondary"
              style={{
                backgroundColor: "rgb(0, 0, 0, 0.4)",
                borderRadius: "50%",
                border: handleBorderScore(),
              }}
            >
              <p className="pl-[2px] pr-[2px]">{item?.score?.toFixed(1)}</p>
            </div>
          </div>
        ) : null}
        {onHover ? (
          <div
            className="absolute top-0 left-0 w-full h-full rounded-[10px]"
            style={{ backgroundColor: "rgb(0, 0, 0, 0.4)" }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div
                className="playItem cursor-pointer"
                onClick={() => handleGotoDetail(item.identifier)}
              >
                <div className="bg-white p-2" style={{ borderRadius: "50%" }}>
                  <CaretRightOutlined
                    style={{ fontSize: 40, color: BaseColor.secondary }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <p
        className="has-tooltip relative text-[16px] md:text-[22px] change-color-secondary w-fit mt-2 cursor-pointer"
        onClick={() => handleGotoDetail(item.identifier)}
      >
        {item?.title?.length > 18 ? (
          <span className="tooltip rounded shadow-lg p-2 bg-primary-2 text-secondary -top-5 absolute">
            {item?.title}
          </span>
        ) : null}
        {convertNameItem(item?.title)}
      </p>
      <div className="flex flex-row items-center gap-2">
        <p className={`text-[12px] md:text-[16px] w-fit text-gray-light`}>
          {item?.type?.name}
        </p>
        <span className="dot"></span>
        <p
          className={`text-[12px] md:text-[16px] w-fit text-gray-light cursor-pointer change-color-secondary`}
          onClick={() => router.push(`/watch/${item.last_episode_identifier}`)}
        >
          {`EP ${splitEpisode(item?.last_episode_identifier)}`}
        </p>
      </div>
    </div>
  );
};

export default ItemSwiper;
