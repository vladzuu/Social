import profileReduce from "./profile-reducer";
import messengerReduce from "./messenger-reducer";
import { configureStore } from '@reduxjs/toolkit'


let store = configureStore({
   reducer: {
      profileReduce, messengerReduce
   }
})

export default store;
