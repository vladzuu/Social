import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { usersApi } from '../api/api';

export type UsersType = {
   followed: boolean
   id: null | number
   name: null | string
   photos: {
      large: null | string
      small: null | string
   }
   status: null | string
   uniqueUrlName: null | string
}
type InitialStateType = {
   users: UsersType[]
   currentPage: number
   totalCount: number
   isFetching: boolean
}
let initialState: InitialStateType = {
   users: [],
   currentPage: 0,
   totalCount: 0,
   isFetching: false
}

const findUserSlice = createSlice({
   name: "findUser",
   initialState,
   reducers: {
      subscribe: (state, action) => {
         state.users = state.users.map((user: any) => {
            if (action.payload === user.id) {
               return { ...user, followed: true }
            }
            return user

         })
      },
      unsubscribe: (state, action) => {
         state.users = state.users.map((user: any) => {
            if (action.payload === user.id) {
               return { ...user, followed: false }
            }
            return user
         })
      },
      setState: (state, action) => {
         state.users = action.payload
      },
      setCount: (state, action) => {
         state.totalCount = action.payload
      },
      setCurrentPage: (state, action) => {
         state.currentPage = action.payload
      },
      toggleIsFetching: (state, action) => {
         state.isFetching = action.payload
      },
   }
})

export const { setCount, setCurrentPage, setState, subscribe, unsubscribe, toggleIsFetching } = findUserSlice.actions


export const getUsersSearch = createAsyncThunk(
   'findUser/getUserSearch',
   async (pageNumber: number, { dispatch }) => {
      dispatch(toggleIsFetching(true))
      const response = await usersApi.getUsers(pageNumber)
      dispatch(toggleIsFetching(false))
      dispatch(setState(response.data.items))
      dispatch(setCount(response.data.totalCount))
      dispatch(setCurrentPage(pageNumber))
   }
)

export const follow = createAsyncThunk(
   'findUser/follow',
   async (userId: number, { dispatch }) => {
      const response = await usersApi.follow(userId)
      if (response.data.resultCode === 0) {
         dispatch(subscribe(userId))
      }
   }
)

// export const follow = (userId: number) => {
//    return async (dispatch: any) => {
//       const response = await usersApi.follow(userId)
//       if (response.data.resultCode === 0) {
//          dispatch(subscribe(userId))
//       }
//    }
// }
export const unfollow = (userId: number) => {
   return async (dispatch: any) => {
      const response = await usersApi.unfollow(userId)
      if (response.data.resultCode === 0) {
         dispatch(unsubscribe(userId))
      }
   }
}
export default findUserSlice.reducer;


// const SUBSCRIBE = 'social/findUser/subscribe'
// const UNSUBSCRIBE = 'social/findUser/unsubscribe'
// const PUSH_STATE = 'social/findUser/pushState'
// const PUSH_COUNT = 'social/findUser/pushCount'
// const CURRENT_PAGE = 'social/findUser/currentPage'
// const TOGGLE_IS_FETCHING = 'social/findUser/toggleIsFetching'

// const findUserReduce = (state = initialState, action: any): InitialStateType => {
//    switch (action.type) {
//       case SUBSCRIBE: {
//          return {
//             ...state,
//             users: state.users.map((user: any) => {
//                if (action.userId === user.id) {
//                   return { ...user, followed: true }
//                }
//                return user;
//             })
//          }
//       };
//       case UNSUBSCRIBE:
//          return {
//             ...state,
//             users: state.users.map((user: any) => {
//                if (action.userId === user.id) {
//                   return { ...user, followed: false }
//                }
//                return user;
//             })
//          };
//       case PUSH_STATE:
//          return {
//             ...state, users: [...action.users]
//          };
//       case PUSH_COUNT:
//          return {
//             ...state, totalCount: action.count
//          };
//       case CURRENT_PAGE:
//          return {
//             ...state, currentPage: action.current
//          };
//       case TOGGLE_IS_FETCHING:
//          return {
//             ...state, isFetching: action.isFetching
//          };
//       default: return state;
//    }
// }

// type SubscribeType = {
//    type: typeof SUBSCRIBE
//    userId: number
// }
// export const subscribe = (userId: number): SubscribeType => ({ type: SUBSCRIBE, userId });
// type UnsubscribeType = {
//    type: typeof UNSUBSCRIBE
//    userId: number
// }
// export const unsubscribe = (userId: number): UnsubscribeType => ({ type: UNSUBSCRIBE, userId });
// export const setState = (users: any) => ({ type: PUSH_STATE, users });
// export const setCount = (count: number) => ({ type: PUSH_COUNT, count });
// export const setCurrentPage = (current: number) => ({ type: CURRENT_PAGE, current })
// export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching })
// export const getUsers = (pageNumber: number) => {
//    return (dispatch: any) => {
//       dispatch(toggleIsFetching(true))
//       usersApi.getUsers(pageNumber)
//          .then(response => {
//             dispatch(toggleIsFetching(false))
//             dispatch(setState(response.data.items))
//             dispatch(setCount(response.data.totalCount))
//             dispatch(setCurrentPage(pageNumber))
//          })
//    }
// }
