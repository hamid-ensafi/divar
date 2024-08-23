import { createSlice } from "@reduxjs/toolkit";

const city =
  localStorage.getItem("city") !== null
    ? JSON.parse(localStorage.getItem("city"))
    : [];
const initialState = {
  cityItem: city,
};
const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    selectCity(state, action) {
      if (action.payload.checked) {
        state.cityItem = [...state.cityItem, action.payload.item];
        return;
      }
      console.log(action);
      state.cityItem = state.cityItem
        .slice()
        .filter((item) => item.cityname !== action.payload.item.cityname);
    },
    deleteItem(state, action) {
      state.cityItem = state.cityItem
        .slice()
        .filter((item) => item.cityname !== action.payload);
    },
    saveLocalStorage(state) {
      localStorage.setItem("city", JSON.stringify(state.cityItem));
      
    },
    cancelSelection(state) {
      state.cityItem = JSON.parse(localStorage.getItem("city"));
    },
  },
});

export const getCitySelect = (state) => state.city;

export default citySlice.reducer;

export const { selectCity, deleteItem, saveLocalStorage ,cancelSelection} = citySlice.actions;
