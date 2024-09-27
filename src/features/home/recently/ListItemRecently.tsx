import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IFilm, IImage } from "@/actions";
import ItemRecently from "@/components/ui/item-film/ItemRecently";

const ListItemRecently = ({
  dataAllFilm = [],
  dataAllImage = [],
  loadingImage = false,
}: {
  dataAllFilm: IFilm[];
  dataAllImage: IImage[];
  loadingImage: boolean;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/catalog");
  };
  return (
    <div className="container">
      <div className="flex flex-row flex-wrap -mr-3 -ml-3">
        {dataAllFilm.map((item) => {
          const imageUrl = Array.isArray(dataAllImage)
            ? dataAllImage.find(
                (itemImage: IImage) => itemImage.film === item._id
              )
            : undefined;
          return (
            <ItemRecently
              key={item._id}
              item={item}
              imageUrl={imageUrl?.url || item?.image?.url || ""}
              loadingImage={loadingImage}
            />
          );
        })}
      </div>
      <div className="flex w-full justify-center mt-10">
        <Button
          onClick={handleClick}
          className="w-[120px]"
          height="40px"
          title={<>VIEW ALL</>}
          type="button"
        />
      </div>
    </div>
  );
};

export default ListItemRecently;
