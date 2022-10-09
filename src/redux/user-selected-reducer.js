let initialState = {
   user: {
      photo: null,
      status: null,
      contacts: null,
      userId: 19500,
   },
   isFetching: false,

}

const userSelectedReduce = (state = initialState, action) => {
   switch (action.type) {
      case 'setState':
         return {
            ...state, user: { ...action.user }
         };
      case 'toggleIsFetching':
         console.log(action.isFetching)
         return {
            ...state, isFetching: action.isFetching
         };
      default: return state;
   }
}


export const setState = (user) => ({ type: 'setState', user });
export const isFetching = (isFetching) => ({ type: 'toggleIsFetching', isFetching })

export default userSelectedReduce;