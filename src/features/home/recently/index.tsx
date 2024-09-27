import useRecently from "@/hooks/use-recently";
import { useTranslation } from "@/translations/TranslationProvider";
import ListItemRecently from "./ListItemRecently";
import ListTab from "./ListTab";
import { listOption } from "@/utils/menu";

const Recently = () => {
  const { t } = useTranslation();
  const {
    tabSelect,
    dataAllFilm,
    isLoading,
    dataAllImage,
    loadingImage,
    handleChangeTab,
  } = useRecently();

  return (
    <div>
      <ListTab
        tabSelect={tabSelect}
        listOption={listOption}
        handleChangeTab={handleChangeTab}
        title={t("recently_added")}
      />
      {isLoading ? (
        <div className="flex h-[200px] w-full justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <ListItemRecently
          dataAllFilm={dataAllFilm.items}
          dataAllImage={dataAllImage}
          loadingImage={loadingImage}
        />
      )}
    </div>
  );
};

export default Recently;
