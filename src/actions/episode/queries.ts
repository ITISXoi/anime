import { useQuery } from "react-query";
import { IResponeEpisode, ItemFilm } from "../type";
import {
  getEpisodeAllFilm,
  getEpisodeOneFilm,
  getListEpisode,
  getURLEmbedOneFilm,
} from "./request";

export const useGetEpisodeAllFilm = (params: {
  id: string;
  page: number;
  limit: number;
}) => {
  return useQuery<IResponeEpisode>(
    [`/episodes/get-all/`, { params }],
    async () => getEpisodeAllFilm(params),
    {
      enabled: !!params.id,
    }
  );
};

export const useGetEpisodeOneFilm = (id: string) => {
  return useQuery<ItemFilm>(
    [`/episodes/get-one/`, id],
    async () => getEpisodeOneFilm(id),
    {
      enabled: !!id,
    }
  );
};

export const useGetURLEmbedOneFilm = (id: string) => {
  return useQuery<any>(
    [`/episodes/video-url/`, id],
    async () => getURLEmbedOneFilm(id),
    {
      enabled: !!id,
    }
  );
};

export const useGetEpisodeAll = (params: {
  id: string;
  page: number;
  limit: number;
}) => {
  return useQuery<IResponeEpisode>(
    [`/episodes/get-all-by-episode/`, { params }],
    async () => getListEpisode(params),
    {
      enabled: !!params.id,
    }
  );
};
