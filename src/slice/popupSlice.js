import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isOpen: false,
    target:''
}
const popupSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openPopup(state, action) {
            state.isOpen = !state.isOpen
            state.target=action.payload
        },
        closePopup(state) {
            state.isOpen=false
            state.target=''
        }
    }
})


export const getOpen = (state) => state.ui



export default popupSlice.reducer 

export const {openPopup,closePopup }=popupSlice.actions