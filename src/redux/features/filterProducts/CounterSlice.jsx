import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterParams: {
    brandId: [],
    modelId: [],
    stateId: [],
    districtId: [],
    yom: [],
    minPrice: null,
    maxPrice: null,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addBrand: (state, action) => {
      let selectedBrands = state.filterParams.brandId;

      if (selectedBrands.includes(action.payload)) {
        // Remove the brand if it exists
        selectedBrands = selectedBrands.filter((brand) => brand !== action.payload);
      } else {
        // Add the brand if it doesn't exist
        selectedBrands = [...selectedBrands, action.payload];
      }

      // Update the state with the new array
      state.filterParams.brandId = selectedBrands;
    },
    addStates: (state, action) => {
      let selectedStates = state.filterParams.stateId;

      if (selectedStates.includes(action.payload)) {
        // Remove the brand if it exists
        selectedStates = selectedStates.filter((brand) => brand !== action.payload);
      } else {
        // Add the brand if it doesn't exist
        selectedStates = [...selectedStates, action.payload];
      }

      // Update the state with the new array
      state.filterParams.stateId = selectedStates;
    },

  },
});

export const { addBrand,addStates } = counterSlice.actions;
export default counterSlice.reducer;
