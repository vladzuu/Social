import { usersApi } from '../api/api';

const SUBSCRIBE = 'social/findUser/subscribe'
const UNSUBSCRIBE = 'social/findUser/unsubscribe'
const PUSH_STATE = 'social/findUser/pushState'
const PUSH_COUNT = 'social/findUser/pushCount'
const CURRENT_PAGE = 'social/findUser/currentPage'
const TOGGLE_IS_FETCHING = 'social/findUser/toggleIsFetching'

let initialState = {
   users: [],
   currentPage: 1,
   totalCount: 0,
   isFetching: false,

}

const findUserReduce = (state = initialState, action) => {
   switch (action.type) {
      case SUBSCRIBE: {
         return {
            ...state,
            users: state.users.map((user) => {
               if (action.userId === user.id) {
                  return { ...user, followed: true }
               }
               return user;
            })
         }
      };
      case UNSUBSCRIBE:
         return {
            ...state,
            users: state.users.map((user) => {
               if (action.userId === user.id) {
                  return { ...user, followed: false }
               }
               return user;
            })
         };
      case PUSH_STATE:
         return {
            ...state, users: [...action.users]
         };
      case PUSH_COUNT:
         return {
            ...state, totalCount: action.count
         };
      case CURRENT_PAGE:
         return {
            ...state, currentPage: action.current
         };
      case TOGGLE_IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         };
      default: return state;
   }
}

export const subscribe = (userId) => ({ type: SUBSCRIBE, userId });
export const unsubscribe = (userId) => ({ type: UNSUBSCRIBE, userId });
export const setState = (users) => ({ type: PUSH_STATE, users });
export const setCount = (count) => ({ type: PUSH_COUNT, count });
export const setCurrentPage = (current) => ({ type: CURRENT_PAGE, current })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getUsers = (pageNumber) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      usersApi.getUsers(pageNumber)
         .then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setState(response.data.items))
            dispatch(setCount(response.data.totalCount))
            dispatch(setCurrentPage(pageNumber))
         })
   }
}

export const follow = (userId) => {
   return async (dispatch) => {
      await usersApi.follow(userId)
      dispatch(subscribe(userId))
   }
}
export const unfollow = (userId) => {
   return async (dispatch) => {
      await usersApi.unfollow(userId)
      dispatch(unsubscribe(userId))
   }
}
export default findUserReduce;