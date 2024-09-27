import { useQuery } from "react-query";
import {
  getAllFilm,
  getDetailFilm,
  getImageFilm,
  getAllImage,
} from "./request";
import { IFilm, IFilmResponse, IImage } from "../type";

export const useGetListFilm = (params: { limit: number; page: number }) => {
  return useQuery<IFilmResponse>(["/films/get-all", { params }], async () =>
    getAllFilm(params)
  );
};

export const useGetDetailFilm = (id: string) => {
  return useQuery<IFilm>(
    [`/films/get-one/`, id],
    async () => getDetailFilm(id),
    {
      enabled: !!id,
    }
  );
};

export const useGetImageFilm = (id: string) => {
  return useQuery<string>(
    [`/films/get-image-film/`, id],
    async () => getImageFilm(id),
    {
      enabled: !!id,
    }
  );
};

export const useGetListImage = (params: { limit: number; page: number }) => {
  return useQuery<IImage[]>(["/films/get-all/images", { params }], async () =>
    getAllImage(params)
  );
};
