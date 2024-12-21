import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterParams: {
    brandId: [],
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addBrand: (state, action) => {
      state.filterParams.brandId.push(action.payload);
    },
  },
});

export const { addBrand } = counterSlice.actions;
export default counterSlice.reducer;
