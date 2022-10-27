import { configureStore } from '@reduxjs/toolkit'
import profileReduce from "./profile-reducer";
import messengerReduce from "./messenger-reducer";
import findUserReduce from "./find-user-reducer";
import authReduce from './auth-reducer'
import { useDispatch } from "react-redux";
let store = configureStore({
   reducer: {
      profileReduce,
      messengerReduce,
      findUserReduce,
      auth: authReduce,
   }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch



export default store;
