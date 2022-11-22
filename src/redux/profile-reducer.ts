import { AnyAction } from 'redux';
import { profileApi } from '../api/api';
import { Dispatch } from 'redux';

const GET_STATUS = 'social/profile/getStatus';
const UPDATE_POST_CHANGE = 'social/profile/updatePostChange';
const ADD_POST = 'social/profile/addPost';
const IS_FETCHING = 'social/profile/isFetching';
const SET_USER_DATA = 'social/profile/SETUserData';
const GET_CHANGE_PHOTO = 'social/profile/getChangePhoto';

export type CommentDataType = {
   comment: string
   like: number
   id: number
}
type InitialStateType = {
   userProfile: UserProfileType
   status: string
   newPost: {
      text: string
   }
   commentData: CommentDataType[]
   isFetching: boolean
}
export type UserProfileType = {

   aboutMe: null | string
   contacts: {
      facebook: null | string
      website: null | string
      vk: null | string
      twitter: null | string
      instagram: null | string
      youtube: null | string
      github: null | string
      mainLink: null | string
   },
   lookingForAJob: boolean
   lookingForAJobDescription: null | string
   fullName: | string
   userId: null | number
   photos: {
      small: null | string
      large: null | string
   }
}

export let userProfile: UserProfileType = {
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
   userId: null,
   photos: {
      small: null,
      large: null,
   },
}


let initialState: InitialStateType = {
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
      userId: null,
      photos: {
         small: null,
         large: null
      }
   },
   commentData: [
      { comment: 'My first comment!', like: 34, id: 1 },
      { comment: 'Its comment', like: 12, id: 2 },
      { comment: 'Hi? anybody', like: 41, id: 3 },
      { comment: 'What what what what?', like: 23, id: 4 },
      { comment: "ok, ok, ok, ok!", like: 5, id: 5 },
   ],
   status: '',
   newPost: {
      text: ''
   },
   isFetching: false
}

const profileReduce = (state = initialState, action: any): InitialStateType => {
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
            commentData: [...state.commentData, { comment: state.newPost.text, like: 0, id: 6 }],
            newPost: { ...state.newPost, text: '' }
         }
      }
      case IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         }
      case SET_USER_DATA:
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

export const statusAddToState = (status: string) => ({ type: GET_STATUS, status });
export const addPost = () => ({ type: ADD_POST });
export const onPostChange = (text: string) => ({ type: UPDATE_POST_CHANGE, text: text });
export const toggleIsFetching = (isFetching: boolean) => ({ type: IS_FETCHING, isFetching })
const setUserProfileData = (userData: UserProfileType) => ({ type: SET_USER_DATA, userData })
const getChangePhoto = (data: string) => ({ type: GET_CHANGE_PHOTO, data })

export const setStatus = (status: string) => {
   return async () => {
      await profileApi.setStatus(status)
   }
}

export const getUserProfile = (id: number) => {
   return async (dispatch: any) => {
      try {
         dispatch(toggleIsFetching(true))
         const data = await profileApi.getUserProfile(id)
         dispatch(setUserProfileData(data.data))
         dispatch(toggleIsFetching(false))
      } catch (err) {
         console.error(err)
      }
   }
}

export const getStatus = (id: number) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await profileApi.getStatus(id)
         dispatch(statusAddToState(response.data))
      } catch (err) {
         console.error(err)
      }
   }
}

export const changeUserPhoto = (event: any) => {
   return async (dispatch: Dispatch) => {
      try {
         const response = await profileApi.addPhotoProfile(event.target.files[0]);
         if (response.data.resultCode === 0) {
            dispatch(getChangePhoto(response.data.data.photos))
         }
      } catch (err) {
         console.error(err)
      }
   }
}

export default profileReduce;