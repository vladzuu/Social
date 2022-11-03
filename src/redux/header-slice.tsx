import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isOpenMenu: false,
   nameCssClass: 'navbar'
}

const headerSlice = createSlice({
   name: 'header',
   initialState,
   reducers: {
      setClass: (state, action) => {
         state.isOpenMenu = !state.isOpenMenu
         if (state.isOpenMenu) {
            state.nameCssClass = 'navbar active'
         } else {
            state.nameCssClass = 'navbar'
         }
      }
   }
})

export const { setClass } = headerSlice.actions

export default headerSlice.reducer