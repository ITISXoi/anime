import { baseService } from "@/libs/axios";
import { IOption } from "../type";

export const getOptionGenres = async (): Promise<IOption[]> => {
  return await baseService.get(`/genres/get-all`);
};

export const getOptionTheme = async (): Promise<IOption[]> => {
  return await baseService.get(`/themes/get-all`);
};

export const getOptionDemographic = async (): Promise<IOption[]> => {
  return await baseService.get(`/demographics/get-all`);
};
