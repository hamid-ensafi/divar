import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cityItem: [],
};
const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    selectCity(state, action) {
      if (action.payload.checked) {
        state.cityItem = [...state.cityItem, action.payload.value];
        return;
      }

      state.cityItem = state.cityItem
        .slice()
        .filter((item) => item !== action.payload.value);
    },
    deleteItem(state, action) {
      state.cityItem = state.cityItem
        .slice()
        .filter((item) => item !== action.payload);
    },
  },
});

export const getCitySelect = (state) => state.city;

export default citySlice.reducer;

export const { selectCity, deleteItem } = citySlice.actions;
