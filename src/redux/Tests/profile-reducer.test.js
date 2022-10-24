import profileReduce, { addPost, onPostChange } from "../profile-reducer";

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

test('length of post should be incremented', () => {
   let action = addPost()
   let newState = profileReduce(initialState, action)
   expect(newState.commentData.length).toBe(6);
});

test('text posts to be correct', () => {
   let action = onPostChange('new post')
   let newState = profileReduce(initialState, action)
   expect(newState.newPost.text).toBe('new post');
});
