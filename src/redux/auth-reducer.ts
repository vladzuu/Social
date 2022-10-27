import { profileApi } from "../api/api";

const IS_LOGIN_USER = 'social/auth/isloginUser'

let initialState = {
   id: null as null | number,
   email: null as null | string,
   login: null as null | string,
   isFetching: false,
   isAuth: false
}
type InitialStateType = typeof initialState

const authReduce = (state = initialState, action: any): InitialStateType => {
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

type Data = {
   id: number
   login: string
   email: string
}
type AddDataUserType = {
   type: string
   data: Data
}

export const addDataUser = (data: Data): AddDataUserType => ({ type: IS_LOGIN_USER, data });

export const getMyAcc = () => {
   return async (dispatch: any) => {
      const response = await profileApi.myAccount()
      if (response.data.resultCode === 0) {
         dispatch(addDataUser(response.data.data))
      }
   }
}


export default authReduce;