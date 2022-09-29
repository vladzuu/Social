import profileReduce from "./profile-reducer";
import messengerReduce from "./messenger-reducer";
import findUserReduce from "./find-user-reducer";
import { configureStore } from '@reduxjs/toolkit'


let store = configureStore({
   reducer: {
      profileReduce, messengerReduce, findUserReduce,
   }
})

export default store;
