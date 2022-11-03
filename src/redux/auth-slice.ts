import { UserProfileType } from './profile-reducer';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../api/api";
import { Action } from '@remix-run/router';

let initialState = {
   user: {
      id: null as null | number,
      email: null as null | string,
      login: null as null | string,
   },
   userProfile: {
      aboutMe: null,
      contacts: {
         facebook: null,
         website: null,
         vk: null,
         twitter: null,
         instagram: null,
         youtube: null,
         github: null,
         mainLink: null
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: '',
      userId: null,
      photos: {
         small: null,
         large: null
      }
   } as UserProfileType,
   isFetching: false,
   isAuth: false
}
interface user {
   id: null | number,
   email: null | string,
   login: null | string,

}
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginData: (state, action: any) => {
         state.isAuth = true
         state.user = action.payload
      },
      userProfileData: (state, action: any) => {
         state.userProfile = action.payload
      }
   }
})

const { loginData, userProfileData } = authSlice.actions

export const getMyAcc = createAsyncThunk(
   'auth/getMyAcc',
   async (_, { dispatch }) => {
      const response = await profileApi.myAccount()
      if (response.data.resultCode === 0) {
         dispatch(loginData(response.data.data))
         let responseProfile = await profileApi.getUserProfile(response.data.data.id)
         dispatch(userProfileData(responseProfile.data))
      }
   }
)


export default authSlice.reducer;

// export const getMyAcc = () => {
//    return async (dispatch: any) => {
//       const response = await profileApi.myAccount()
//       if (response.data.resultCode === 0) {
//          dispatch(loginData(response.data.data))
//       }
//    }
// }



// const IS_LOGIN_USER = 'social/auth/isloginUser'
// const authReduce = (state = initialState, action: any): InitialStateType => {
//    switch (action.type) {
//       case IS_LOGIN_USER:
//          return {
//             ...state,
//             ...action.data,
//             isAuth: true
//          }
//       default:
//          return state;
//    }
// }

// type Data = {
//    id: number
//    login: string
//    email: string
// }
// type AddDataUserType = {
//    type: string
//    data: Data
// }

// export const addDataUser = (data: Data): AddDataUserType => ({ type: IS_LOGIN_USER, data });

// export const getMyAcc = () => {
//    return async (dispatch: any) => {
//       const response = await profileApi.myAccount()
//       if (response.data.resultCode === 0) {
//          dispatch(addDataUser(response.data.data))
//       }
//    }
// }


