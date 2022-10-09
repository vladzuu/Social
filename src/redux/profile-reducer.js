let initialState = {
   newPost: {
      text: ''
   },
   commentData: [
      { comment: 'My first comment!', like: '34' },
      { comment: 'Its comment', like: '12' },
      { comment: 'Hi? anybody', like: '41' },
      { comment: 'What what what what?', like: '23' },
      { comment: "ok, ok, ok, ok!", like: '5' },
   ],
   isFetching: false
}

const profileReduce = (state = initialState, action) => {
   switch (action.type) {
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

export const addPost = () => ({ type: 'addPost' });
export const onPostChange = (text) => ({ type: 'updatePostChange', text: text });
export const toggleIsFetching = (isFetching) => ({ type: 'isFetching', isFetching })
export default profileReduce;