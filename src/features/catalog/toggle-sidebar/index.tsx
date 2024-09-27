import DropIcon from "@/assets/icons/drop-icon";
import Button from "@/components/ui/button";
import { cn } from "@/config/helper";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

interface Props {
  toggleSideBar: boolean;
  setToggleSideBar: Dispatch<SetStateAction<boolean>>;
  params: {
    limit: number;
    page: number;
    keyword: string;
    genre: string;
    theme: string;
    demographic: string;
  };
  setParams: Dispatch<
    SetStateAction<{
      limit: number;
      page: number;
      keyword: string;
      genre: string;
      theme: string;
      demographic: string;
    }>
  >;
  optionGenres: {
    value: string;
    label: string;
  }[];
  optionThemes: {
    value: string;
    label: string;
  }[];
  optionDemographics: {
    value: string;
    label: string;
  }[];
  paramsMobile: {
    genre: string;
    theme: string;
    demographic: string;
  };
  setParamsMobile: Dispatch<
    SetStateAction<{
      genre: string;
      theme: string;
      demographic: string;
    }>
  >;
}

const FilterSideBar = (props: Props) => {
  const {
    toggleSideBar,
    setToggleSideBar,
    params,
    setParams,
    optionGenres,
    optionThemes,
    optionDemographics,
    paramsMobile,
    setParamsMobile,
  } = props;

  const handleClickSave = () => {
    setParams({
      ...params,
      genre: paramsMobile.genre,
      demographic: paramsMobile.demographic,
      theme: paramsMobile.theme,
    });
    setToggleSideBar(false);
  };

  const handleCloseSideBar = () => {
    setParamsMobile({
      genre: params.genre,
      theme: params.theme,
      demographic: params.demographic,
    });
    setToggleSideBar(false);
  };

  return (
    <div
      className={cn({
        "opacity-100 visible transition-opacity transition-visibility duration-700 h-full":
          toggleSideBar,
        "opacity-0 invisible": !toggleSideBar,
      })}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-row w-full justify-between">
            <p className="text-[20px]">Filter</p>
            <CloseOutlined
              className="cursor-pointer search"
              onClick={handleCloseSideBar}
              style={{ fontSize: 20 }}
            />
          </div>
          <Select
            className="custom-select-filter-mobile"
            popupClassName="dropdown-select"
            value={paramsMobile.genre}
            onChange={(value) => {
              setParamsMobile({
                ...paramsMobile,
                genre: value,
              });
            }}
            options={optionGenres}
            suffixIcon={<DropIcon />}
          />
          <Select
            className="custom-select-filter-mobile"
            popupClassName="dropdown-select"
            value={paramsMobile.theme}
            onChange={(value) => {
              setParamsMobile({
                ...paramsMobile,
                theme: value,
              });
            }}
            options={optionThemes}
            suffixIcon={<DropIcon />}
          />
          <Select
            className="custom-select-filter-mobile"
            popupClassName="dropdown-select"
            value={paramsMobile.demographic}
            onChange={(value) => {
              setParamsMobile({
                ...paramsMobile,
                demographic: value,
              });
            }}
            options={optionDemographics}
            suffixIcon={<DropIcon />}
          />
        </div>
        <Button title={<>Save</>} type={"button"} onClick={handleClickSave} />
      </div>
    </div>
  );
};

export default FilterSideBar;
