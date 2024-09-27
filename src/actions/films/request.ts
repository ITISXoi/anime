import { baseService } from "@/libs/axios";
import { IFilm, IFilmResponse, IImage } from "../type";

export const getAllFilm = async (params: {
  limit: number;
  page: number;
}): Promise<IFilmResponse> => {
  return await baseService.get(`/films/get-all`, { params });
};

export const getDetailFilm = async (id: string): Promise<IFilm> => {
  return await baseService.get(`/films/get-one/${id}`);
};

export const getImageFilm = async (id: string): Promise<string> => {
  return await baseService.get(`/films/${id}/image-url`);
};

export const getAllImage = async (params: {
  limit: number;
  page: number;
}): Promise<IImage[]> => {
  return await baseService.get(`/films/get-all/images`, { params });
};
