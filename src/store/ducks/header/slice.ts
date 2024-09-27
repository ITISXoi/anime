import { RootState } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IHeaderStore {
  valueSearch: string;
  toggleSideBar: boolean;
}

const initialState: IHeaderStore = {
  valueSearch: "",
  toggleSideBar: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setValueSearch: (
      state,
      action: PayloadAction<IHeaderStore["valueSearch"]>
    ) => {
      return {
        ...state,
        valueSearch: action.payload,
      };
    },
    setToggleSideBar: (
      state,
      action: PayloadAction<IHeaderStore["toggleSideBar"]>
    ) => {
      return {
        ...state,
        toggleSideBar: action.payload,
      };
    },
  },
});

export const getValueSearch = (state: RootState) => state.header.valueSearch;
export const getToggleSideBar = (state: RootState) =>
  state.header.toggleSideBar;

export const { setValueSearch } = headerSlice.actions;
export const { setToggleSideBar } = headerSlice.actions;

export default headerSlice.reducer;
