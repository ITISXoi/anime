import en from "./en.json";

export const locates = {
  en: en,
};

export type Keys = keyof (typeof locates)["en"];
