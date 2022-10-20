import { profileApi, usersApi } from "../api/api";


let initialState = {
   id: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false
}

const authReduce = (state = initialState, action) => {
   switch (action.type) {
      case 'isloginUser':
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default:
         return state;
   }
}

export const addDataUser = (data) => ({ type: 'isloginUser', data });

export const getMyAcc = () => {
   return (dispatch) =>
      profileApi.myAccount()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(addDataUser(response.data.data))
            }
         })
}


export default authReduce;