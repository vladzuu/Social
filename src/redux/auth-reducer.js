import { profileApi, usersApi } from "../api/api";

const IS_LOGIN_USER = 'social/auth/isloginUser'

let initialState = {
   id: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false
}

const authReduce = (state = initialState, action) => {
   switch (action.type) {
      case IS_LOGIN_USER:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default:
         return state;
   }
}

export const addDataUser = (data) => ({ type: IS_LOGIN_USER, data });

export const getMyAcc = () => {
   return async (dispatch) => {
      const response = await profileApi.myAccount()
      if (response.data.resultCode === 0) {
         dispatch(addDataUser(response.data.data))
      }
   }
}


export default authReduce;