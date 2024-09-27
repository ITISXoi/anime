/* eslint-disable @next/next/no-img-element */
interface Props {
  isLoading: boolean;
  imageFilmUrl: string;
  score: number;
}

const ImageDetail = (props: Props) => {
  const { isLoading, imageFilmUrl, score } = props;
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
    <>
      {isLoading ? (
        <div className="flex h-full w-full justify-center items-center bg-primary-2 rounded-[10px] aspect-image">
          <span className="loader"></span>
        </div>
      ) : (
        <img
          alt="image"
          src={imageFilmUrl || "/images/anisage-load.jpg"}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
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
    </>
  );
};

export default ImageDetail;
