import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/filterProducts/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
