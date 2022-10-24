import { configureStore } from '@reduxjs/toolkit'
import profileReduce from "./profile-reducer";
import messengerReduce from "./messenger-reducer";
import findUserReduce from "./find-user-reducer";
import authReduce from './auth-reducer'

let store = configureStore({
   reducer: {
      profileReduce,
      messengerReduce,
      findUserReduce,
      auth: authReduce,
   }
})

export default store;
