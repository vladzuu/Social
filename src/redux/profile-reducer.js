import { profileApi } from '../api/api'


let initialState = {
   status: '',
   newPost: {
      text: ''
   },
   commentData: [
      { comment: 'My first comment!', like: '34', id: '1' },
      { comment: 'Its comment', like: '12', id: '2' },
      { comment: 'Hi? anybody', like: '41', id: '3' },
      { comment: 'What what what what?', like: '23', id: '4' },
      { comment: "ok, ok, ok, ok!", like: '5', id: '5' },
   ],
   isFetching: false
}

const profileReduce = (state = initialState, action) => {
   switch (action.type) {
      case 'getStatus':
         return {
            ...state,
            status: action.status
         }
      case 'updatePostChange':
         return {
            ...state,
            newPost: { ...state.newPost, text: action.text }
         }
      case 'addPost': {
         return {
            ...state,
            commentData: [...state.commentData, { comment: state.newPost.text, like: '0' }],
            newPost: { ...state.newPost, text: '' }
         }
      }
      case 'isFetching':
         return {
            ...state, isFetching: action.isFetching
         }
      default:
         return state;
   }
}


export const statusAddToState = (status) => ({ type: 'getStatus', status });
export const addPost = () => ({ type: 'addPost' });
export const onPostChange = (text) => ({ type: 'updatePostChange', text: text });
export const toggleIsFetching = (isFetching) => ({ type: 'isFetching', isFetching })

export const setStatus = (status) => {
   return (dispatch) => {
      profileApi.setStatus(status)
         .then((response) => console.log(response))
   }
}

export const getMyProfile = (myId) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      profileApi.MyProfile(myId)
         .then(response => {
            dispatch(toggleIsFetching(false))
         })
   }
}

export const getStatus = (id) => {
   return (dispatch) => {
      profileApi.getStatus(id)
         .then((response) => {
            dispatch(statusAddToState(response.data))
         })
   }
}
export default profileReduce;