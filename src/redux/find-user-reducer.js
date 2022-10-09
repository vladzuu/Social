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
                  return { ...user, subscribe: true }
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
                  return { ...user, subscribe: false }
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
export default findUserReduce;