"use client";
import SideBar from "@/components/ui/sidebar";
import useCatalog from "@/hooks/use-catalog";
import { smoothscroll } from "@/utils/funtions";
import { useEffect } from "react";
import ListItemCatalog from "./ListItemCatalog";
import Params from "./Params";
import TitleCatalog from "./TitleCatalog";
import FilterSideBar from "./toggle-sidebar";

const Catalog = () => {
  const {
    params,
    setParams,
    dataAllFilm,
    isLoading,
    dataAllImage,
    loadingImage,
    optionGenres,
    optionThemes,
    optionDemographics,
    toggleSideBar,
    setToggleSideBar,
    paramsMobile,
    setParamsMobile,
  } = useCatalog();

  useEffect(() => {
    smoothscroll();
  }, []);

  return (
    <>
      <TitleCatalog />
      <Params
        optionGenres={optionGenres}
        optionThemes={optionThemes}
        optionDemographics={optionDemographics}
        params={params}
        setParams={setParams}
        setToggleSideBarFilter={setToggleSideBar}
        paramsMobile={paramsMobile}
        setParamsMobile={setParamsMobile}
      />
      {isLoading ? (
        <div className="flex h-[200px] w-full justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <ListItemCatalog
          dataAllFilm={dataAllFilm.items}
          total={dataAllFilm.total}
          params={params}
          setParams={setParams}
          dataAllImage={dataAllImage}
          loadingImage={loadingImage}
        />
      )}
      <SideBar toggleSideBar={toggleSideBar}>
        <FilterSideBar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
          params={params}
          setParams={setParams}
          optionGenres={optionGenres}
          optionThemes={optionThemes}
          optionDemographics={optionDemographics}
          paramsMobile={paramsMobile}
          setParamsMobile={setParamsMobile}
        />
      </SideBar>
    </>
  );
};

export default Catalog;
