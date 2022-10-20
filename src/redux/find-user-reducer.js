import { usersApi } from '../api/api';

let initialState = {
   users: [],
   currentPage: 1,
   totalCount: 0,
   isFetching: false,

}

const findUserReduce = (state = initialState, action) => {
   switch (action.type) {
      case 'subscribe': {
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
      case 'unsubscribe':
         return {
            ...state,
            users: state.users.map((user) => {
               if (action.userId === user.id) {
                  return { ...user, followed: false }
               }
               return user;
            })
         };
      case 'pushState':
         return {
            ...state, users: [...action.users]
         };
      case 'pushCount':
         return {
            ...state, totalCount: action.count
         };
      case 'currentPage':
         return {
            ...state, currentPage: action.current
         };
      case 'toggleIsFetching':
         return {
            ...state, isFetching: action.isFetching
         };
      default: return state;
   }
}

export const subscribe = (userId) => ({ type: 'subscribe', userId });
export const unsubscribe = (userId) => ({ type: 'unsubscribe', userId });
export const setState = (users) => ({ type: 'pushState', users });
export const setCount = (count) => ({ type: 'pushCount', count });
export const setCurrentPage = (current) => ({ type: 'currentPage', current })
export const toggleIsFetching = (isFetching) => ({ type: 'toggleIsFetching', isFetching })

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
   return (dispatch) => {
      usersApi.follow(userId)
         .then(() => {
            dispatch(subscribe(userId))
         })
   }
}
export const unfollow = (userId) => {
   return (dispatch) => {
      usersApi.unfollow(userId)
         .then(() => {
            dispatch(unsubscribe(userId))
         })
   }
}
export default findUserReduce;