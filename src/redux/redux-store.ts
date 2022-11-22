import { configureStore } from '@reduxjs/toolkit'
import profileReduce from "./profile-reducer";
import messengerReduce from "./messenger-reducer";
import findUserReduce from "./find-user-slice";
import authSlice from './auth-slice'
import { useDispatch } from "react-redux";
import headerSlice from './header-slice';

let store = configureStore({
  reducer: {
    profileReduce,
    messengerReduce,
    findUserReduce,
    auth: authSlice,
    header: headerSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
