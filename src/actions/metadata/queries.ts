import { useQuery } from "react-query";
import { IOption } from "../type";
import {
  getOptionDemographic,
  getOptionGenres,
  getOptionTheme,
} from "./request";

export const useGetOptionGenres = () => {
  return useQuery<IOption[]>(["/genres/get-all"], async () =>
    getOptionGenres()
  );
};

export const useGetOptionThemes = () => {
  return useQuery<IOption[]>(["/themes/get-all"], async () => getOptionTheme());
};

export const useGetOptionDemographic = () => {
  return useQuery<IOption[]>(["/demographics/get-all"], async () =>
    getOptionDemographic()
  );
};
