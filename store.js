import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./src/slice/popupSlice";

const store = configureStore({
    reducer: {
        ui:popupSlice
    }
})

export default store