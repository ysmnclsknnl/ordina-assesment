import { configureStore } from "@reduxjs/toolkit";
import mySliceReducer from "./slice.js";

export const store = configureStore({
  reducer: {
    mySlice: mySliceReducer,
  },
});
