import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './profile.scss'
import { setStatus, getUserProfile, getStatus } from "../../redux/profile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import Status from "./Status";
import Profile from "./Profile";
import ProfilePost from "./ProfilePost";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/redux-store";

const ContainerProfile = () => {
   const status = useSelector((state: RootState) => state.profileReduce.status);
   const userProfileData = useSelector((state: RootState) => state.profileReduce.userProfile)
   const commentData = useSelector((state: RootState) => state.profileReduce.commentData);
   const newPost = useSelector((state: RootState) => state.profileReduce.newPost);
   const isAuth = useSelector((state: RootState) => state.auth.isAuth);
   const myId = useSelector((state: RootState) => state.auth.user.id);
   const isFetching = useSelector((state: RootState) => state.profileReduce.isFetching);
   const dispatch = useDispatch<any>();

   useEffect(() => {
      if (!!myId) {
         dispatch(getUserProfile(myId))
         dispatch(getStatus(myId))
      }
   }, [myId])

   if (!isAuth) return <Navigate to={'/login'} />
   if (isFetching) return <Preloader />
   return (
      <div className="main">

         <Profile
            id={myId}
            userProfileData={userProfileData} />
         <Status status={status} setStatus={setStatus} />
         <ProfilePost
            commentData={commentData}
            newPost={newPost}
            userData={userProfileData}
         />
      </div>
   )
}

export default ContainerProfile;