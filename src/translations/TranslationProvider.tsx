/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import {
  Locate,
  TranslationActions,
  TranslationOriginalContextType,
  TranslationState,
} from "./store/type";
import { translationReducer } from "./store/reducers";
import { TranslationActionType } from "./store/enum";
import { Keys, locates } from "./locates";

export const useTranslation = () => React.useContext(TranslationContext);

function getInitialState() {
  const locate =
    typeof window !== "undefined" ? localStorage.getItem("locate") : "";
  return locate ? JSON.parse(locate) : "en";
}

export const TranslationProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: Partial<TranslationState>;
}) => {
  const [state, dispatch] = React.useReducer(translationReducer, {
    ...defaultState,
    ...initialState,
  });

  const locateFile = locates[state.locate];

  const t = (key: Keys) => {
    if (locateFile[key]) {
      return locateFile[key];
    }

    return "error key";
  };

  const actions = React.useRef<TranslationActions>({
    locateChanged: (value: Locate) =>
      dispatch({ type: TranslationActionType.LocateChanged, value }),
  }).current;

  const context = React.useMemo(
    () => ({
      ...state,
      ...actions,
      t,
    }),
    [state, actions],
  );

  useEffect(() => {
    localStorage.setItem("locate", JSON.stringify(state.locate));
  }, [state.locate]);

  return (
    <TranslationContext.Provider value={context}>
      {children}
    </TranslationContext.Provider>
  );
};

const defaultState: TranslationState = Object.freeze({
  locate: getInitialState() || "en",
});

const initTranslationContext: TranslationContextType = {
  ...defaultState,
  locateChanged: missingInit,
  t: () => "error key",
};

interface TranslationContextType extends TranslationOriginalContextType {
  t: (_key: Keys) => string;
}

const TranslationContext = React.createContext<TranslationContextType>(
  initTranslationContext,
);

function missingInit() {}
