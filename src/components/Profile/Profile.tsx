
import React, { ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import userNoPhoto from '../../../src/img/userNoPhoto.png'
import { changeUserPhoto, UserProfileType } from "../../redux/profile-reducer";
import { useAppDispatch } from "../../redux/redux-store";


interface PropsType {
   userProfileData: UserProfileType
   id: number
}


const Profile = ({ userProfileData, id, ...props }: PropsType) => {
   const dispatch = useAppDispatch()
   const idAuthUser = useSelector((state: any) => state.auth.id)
   useEffect(() => {

   })

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         if (e.target.files.length) {
            dispatch(changeUserPhoto(e))
         }
      }
   }

   return (
      <div>

         {(userProfileData.photos.small) ? <img src={userProfileData.photos.small} /> : <img src={userNoPhoto} />}
         {(id === idAuthUser)
            ? <input type='file' onChange={onMainPhotoSelected} /> : null}
      </div>)
}

export default Profile;