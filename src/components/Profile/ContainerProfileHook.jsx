import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import './profile.scss'
import { onPostChange, addPost, toggleIsFetching, setStatus, getUserProfile, getStatus } from "../../redux/profile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import Status from "./StatusHook";
import Profile from "./Profile";
import ProfilePost from "./ProfilePost";

const ContainerProfile = () => {
   const status = useSelector(state => state.profileReduce.status);
   const userProfileData = useSelector(state => state.profileReduce.userProfile)
   const commentData = useSelector(state => state.profileReduce.commentData);
   const newPost = useSelector(state => state.profileReduce.newPost);
   const isAuth = useSelector(state => state.profileReduce.isAuth);
   const myId = useSelector(state => state.auth.id);
   const isFetching = useSelector(state => state.profileReduce.isFetching);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!!myId) {
         dispatch(getUserProfile(myId))
         dispatch(getStatus(myId))
      }
   }, [myId])

   // { if (!isAuth) return <Navigate to={'/login'} /> }
   { if (isFetching) return <Preloader isFetching={isFetching} /> }
   return (
      <>

         <Profile
            id={myId}
            userProfileData={userProfileData} />
         <Status status={status} setStatus={setStatus} />
         <ProfilePost
            commentData={commentData}
            newPost={newPost}
            onPostChange={onPostChange}
            addPost={addPost}
         />
      </>
   )
}

export default ContainerProfile;