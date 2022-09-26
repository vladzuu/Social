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
}

const profileReduce = (state = initialState, action) => {
   switch (action.type) {
      case 'updatePostChange':
         console.log(action)
         state.newPost.text = action.text;
         return state;
      case 'addPost':
         state.commentData.push({ comment: state.newPost.text, like: '0' })
         state.newPost.text = '';
         return state;
      default:
         return state;

   }
}

export const addPostCreator = () => ({ type: 'addPost' });
export const updatePostCreator = (text) => ({ type: 'updatePostChange', text: text });
export default profileReduce;