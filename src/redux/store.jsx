import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/filterProducts/FilterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
