import React, { ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import userNoPhoto from '../../../src/img/userNoPhoto.png'
import { changeUserPhoto, UserProfileType } from "../../redux/profile-reducer";
import { RootState, useAppDispatch } from "../../redux/redux-store";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { color } from "@mui/system";
import { blue } from "@mui/material/colors";


interface PropsType {
   userProfileData: UserProfileType
   id: number | null
}


const Profile = ({ userProfileData, id, ...props }: PropsType) => {
   const dispatch = useAppDispatch()
   const idAuthUser = useSelector((state: RootState) => state.auth.user.id)
   useEffect(() => {

   }, [])

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         if (e.target.files.length) {
            dispatch(changeUserPhoto(e))
         }
      }
   }

   return (
      <div >
         {(userProfileData.photos.large)
            ? <img className="avaProfile" src={userProfileData.photos.large} />
            : <img className="avaProfile" src={userNoPhoto} />}

         {(id === idAuthUser)
            ? <div className="changeAva">
               <input type='file' id="avaChange" onChange={onMainPhotoSelected} />
               <label htmlFor="avaChange"  ><AddCircleRoundedIcon sx={{ fontSize: 45, color: '#1976d2' }} /> </label>
            </div>





            : null}
      </div>)
}

export default Profile;