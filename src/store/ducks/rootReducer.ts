import { combineReducers } from "@reduxjs/toolkit";
import headerSlice from "./header/slice";

const createRootReducer = () => {
  return combineReducers({
    header: headerSlice,
  });
};

export default createRootReducer;
