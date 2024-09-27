export const BaseColor = {
  primary: "#1a191f",
  primary2: "#222028",
  secondary: "#f9ab00",
  white: "#ffffff",
  gray_light: "##c0c0c0",
};

export const defaultDataEpisode = {
  _id: "",
  title: "",
  title_japanese: "",
  title_romanji: "",
  duration: null,
  aired: "",
  film: {
    _id: "",
    identifier: "",
  },
  score: 0,
  synopsis: "",
  current_episode: 0,
  sources: [
    {
      _id: "",
      source: "",
      is_origin: false,
    },
  ],
  video: {
    url: "",
    expired_time: "",
    path_video: "",
  },
  status: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
  identifier: "",
  code: 0,
};

export const dataTable = [
  {
    id: 241,
    title: "The Lost City",
    category: "Movie",
    rating: 9.2,
  },
  {
    id: 825,
    title: "Undercurrents",
    category: "Movie",
    rating: 9.1,
  },
  {
    id: 9271,
    title: "Tales from the Underworld",
    category: "TV Series",
    rating: 9.0,
  },
  {
    id: 635,
    title: "The Unseen World",
    category: "TV Series",
    rating: 8.9,
  },
  {
    id: 825,
    title: "Redemption Road",
    category: "TV Series",
    rating: 8.9,
  },
];

export const titleTable = ["ID", "title", "category", "rating"];

export const authPathName = ["/signin", "/signup", "/forgot-pass"];
