import profileReduce from "./profile-reducer";
import messengerReduce from "./messenger-reducer";
import findUserReduce from "./find-user-reducer";
import userSelectedReduce from "./user-selected-reducer";
import { configureStore } from '@reduxjs/toolkit'
import authReduce from './auth-reducer'


let store = configureStore({
   reducer: {
      profileReduce,
      messengerReduce,
      findUserReduce,
      userSelectedReduce,
      auth: authReduce,

   }
})

export default store;
