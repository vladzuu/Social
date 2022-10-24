import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import userNoPhoto from '../../../src/img/userNoPhoto.png'
import { changeUserPhoto } from "../../redux/profile-reducer";

const Profile = ({ userProfileData, id = 1, ...props }) => {
   const dispatch = useDispatch()
   useEffect(() => {

   })

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         dispatch(changeUserPhoto(e))
      }
   }

   return (
      <div>
         {console.log(userProfileData)}
         {(userProfileData.photos.small) ? <img src={userProfileData.photos.small} /> : <img src={userNoPhoto} />}
         {(id === userProfileData.userId)
            ? <input type='file' onChange={onMainPhotoSelected} /> : null}
      </div>)
}

export default Profile;