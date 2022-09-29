let initialState = {
   users: []
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
            ...state, users: [...state.users, ...action.users],
         }
      default: return state;
   }
}

export const subscribeAC = (userId) => ({ type: 'subscribe', userId });
export const unsubscribeAC = (userId) => ({ type: 'unsubscribe', userId });
export const setStateAC = (users) => ({ type: 'pushState', users })

export default findUserReduce;