import { baseService } from "@/libs/axios";
import { IResponeEpisode, ItemFilm } from "../type";

export const getEpisodeAllFilm = async (param: {
  id: string;
  page: number;
  limit: number;
}): Promise<IResponeEpisode> => {
  const params = {
    page: param.page,
    limit: param.limit,
  };
  return await baseService.get(`/episodes/film/${param.id}`, { params });
};

export const getEpisodeOneFilm = async (id: string): Promise<ItemFilm> => {
  return await baseService.get(`/episodes/get-one/${id}`);
};

export const getURLEmbedOneFilm = async (id: string): Promise<string> => {
  return await baseService.get(`/episodes/${id}/video-url`);
};

export const getListEpisode = async (param: {
  id: string;
  page: number;
  limit: number;
}): Promise<IResponeEpisode> => {
  const params = {
    page: param.page,
    limit: param.limit,
  };
  return await baseService.get(`/episodes/${param.id}/get-all`, { params });
};
