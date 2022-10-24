import { profileApi } from '../api/api';

const GET_STATUS = 'social/profile/getStatus';
const UPDATE_POST_CHANGE = 'social/profile/updatePostChange';
const ADD_POST = 'social/profile/addPost';
const IS_FETCHING = 'social/profile/isFetching';
const SET_USER_DATA = 'social/profile/SETUserData';
const GET_CHANGE_PHOTO = 'social/profile/getChangePhoto';

let initialState = {
   userProfile: {
      aboutMe: null,
      contacts: {
         facebook: null,
         website: null,
         vk: null,
         twitter: null,
         instagram: null,
         youtube: null,
         github: null,
         mainLink: null
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: '',
      userId: '',
      photos: {
         small: null,
         large: null
      }
   },
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
      case GET_STATUS:
         return {
            ...state,
            status: action.status
         }
      case UPDATE_POST_CHANGE:
         return {
            ...state,
            newPost: { ...state.newPost, text: action.text }
         }
      case ADD_POST: {
         return {
            ...state,
            commentData: [...state.commentData, { comment: state.newPost.text, like: '0', id: 6 }],
            newPost: { ...state.newPost, text: '' }
         }
      }
      case IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         }
      case SET_USER_DATA:
         console.log(action.userData)
         return {
            ...state, userProfile: { ...action.userData }
         }
      case GET_CHANGE_PHOTO:
         console.log(action.data)
         return {
            ...state,
            userProfile: {
               ...state.userProfile,
               photos: action.data
            }
         }
      default:
         return state;
   }
}

export const statusAddToState = (status) => ({ type: GET_STATUS, status });
export const addPost = () => ({ type: ADD_POST });
export const onPostChange = (text) => ({ type: UPDATE_POST_CHANGE, text: text });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching })
const setUserProfileData = (userData) => ({ type: SET_USER_DATA, userData })
const getChangePhoto = (data) => ({ type: GET_CHANGE_PHOTO, data })

export const setStatus = (status) => {
   return async () => {
      await profileApi.setStatus(status)
   }
}

export const getUserProfile = (id) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true))
      const data = await profileApi.getUserProfile(id)
      dispatch(setUserProfileData(data.data))
      dispatch(toggleIsFetching(false))
   }
}

export const getStatus = (id) => {
   return async (dispatch) => {
      const response = await profileApi.getStatus(id)
      dispatch(statusAddToState(response.data))
   }
}

export const changeUserPhoto = (event) => {
   return async (dispatch) => {
      const response = await profileApi.addPhotoProfile(event.target.files[0]);
      if (response.data.resultCode === 0) {
         dispatch(getChangePhoto(response.data.data.photos))
      }
   }
}

export default profileReduce;