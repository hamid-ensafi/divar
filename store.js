import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./src/slice/popupSlice";
import citySlice from "./src/slice/citySelectSlice";

const store = configureStore({
    reducer: {
        ui: popupSlice,
        city:citySlice
    }
})

export default store