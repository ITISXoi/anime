import { TranslationActionType } from "./enum";
import { TranslationAction, TranslationState } from "./type";
import { produce } from "immer";

export const translationReducer = (
  state: TranslationState,
  action: TranslationAction,
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TranslationActionType.LocateChanged:
        draft.locate = action.value;
        break;
      default:
        throw new Error("CreateCourseReducer invalid action");
    }
  });
};
