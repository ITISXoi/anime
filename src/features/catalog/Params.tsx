"use client";
import DropIcon from "@/assets/icons/drop-icon";
import { setToggleSideBar } from "@/store/ducks/header/slice";
import { BaseColor } from "@/utils/common";
import { FilterOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

interface Props {
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
  setToggleSideBarFilter: Dispatch<SetStateAction<boolean>>;
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

const Params = (props: Props) => {
  const {
    optionGenres,
    optionThemes,
    optionDemographics,
    params,
    setParams,
    setToggleSideBarFilter,
    paramsMobile,
    setParamsMobile,
  } = props;
  const dispatch = useDispatch();
  return (
    <div
      className="mt-6 pb-6"
      style={{
        borderBottom: `1px solid ${BaseColor.primary2}`,
      }}
    >
      <div className="container flex flex-col gap-6 md:flex-row justify-between">
        <div className="hidden lg:block">
          <div className="flex flex-row flex-wrap gap-8 items-center">
            <Select
              className="custom-select"
              popupClassName="dropdown-select"
              value={params.genre}
              onChange={(value) => {
                setParams({
                  ...params,
                  genre: value,
                });
                setParamsMobile({
                  ...paramsMobile,
                  genre: value,
                });
              }}
              options={optionGenres}
              suffixIcon={<DropIcon />}
            />
            <Select
              className="custom-select"
              popupClassName="dropdown-select"
              value={params.theme}
              onChange={(value) => {
                setParams({
                  ...params,
                  theme: value,
                });
                setParamsMobile({
                  ...paramsMobile,
                  theme: value,
                });
              }}
              options={optionThemes}
              suffixIcon={<DropIcon />}
            />
            <Select
              className="custom-select"
              popupClassName="dropdown-select"
              value={params.demographic}
              onChange={(value) => {
                setParams({
                  ...params,
                  demographic: value,
                });
                setParamsMobile({
                  ...paramsMobile,
                  demographic: value,
                });
              }}
              options={optionDemographics}
              suffixIcon={<DropIcon />}
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <div
            className="flex flex-row gap-2 items-center cursor-pointer search"
            onClick={() => {
              setToggleSideBarFilter(true), dispatch(setToggleSideBar(false));
            }}
          >
            <FilterOutlined style={{ fontSize: 20 }} />
            <p className="text-lg">Filter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Params;
