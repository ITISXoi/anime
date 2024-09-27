export interface IFilmResponse {
  items: IFilm[];
  total: number;
  page: number;
  pageSize: number;
}

export interface IFilm {
  _id: string;
  image: Image;
  trailer: Trailer;
  titles: Title[];
  title: string;
  title_search: string;
  type: IType;
  episodes: number;
  status_info: string;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  rank: number;
  favorites: number;
  synopsis: string;
  background: string;
  year: number;
  broadcast: Broadcast;
  type_mapping: string;
  producers: Producer[];
  licensors: any[];
  studios: Studio[];
  genres: Genre[];
  themes: Theme[];
  demographics: [];
  sources: Source[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  identifier: string;
  code: number;
  last_episode_identifier: string;
}

export interface Image {
  url: string;
  path_image: string;
  expired_time: string;
}

export interface Trailer {
  youtube_id: any;
  url: any;
  embed_url: any;
  images: Images;
}

export interface Images {
  image_url: any;
  small_image_url: any;
  medium_image_url: any;
  large_image_url: any;
  maximum_image_url: any;
}

export interface Title {
  type: string;
  title: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: To;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Producer {
  _id: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Studio {
  _id: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Genre {
  _id: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Theme {
  _id: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Source {
  _id: string;
  source: string;
  is_origin: boolean;
}

export interface IResponeEpisode {
  total: number;
  page: string;
  pageSize: string;
  items: ItemFilm[];
}

export interface ItemFilm {
  _id: string;
  title: string;
  title_japanese: any;
  title_romanji: any;
  duration: number;
  aired: any;
  film: IFilm;
  score: any;
  synopsis: any;
  current_episode: number;
  sources: Source | undefined[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  identifier: string;
  code: number;
}

export interface IImage {
  url: string;
  path_image: string;
  expired_time: string;
  film: string;
}

export interface IOption {
  _id: string;
  name: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IType {
  _id: string;
  name: string;
  identifier: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
