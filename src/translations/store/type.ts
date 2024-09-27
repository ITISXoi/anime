import { TranslationActionType } from "./enum";

export type Locate = "en";

export type TranslationState = {
  locate: Locate;
};

export type TranslationActions = {
  locateChanged: (_value: Locate) => void;
};

export type TranslationOriginalContextType = TranslationState &
  TranslationActions;

export type TranslationAction = {
  type: TranslationActionType.LocateChanged;
  value: Locate;
};
