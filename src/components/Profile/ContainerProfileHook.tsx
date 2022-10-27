import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './profile.scss'
import { setStatus, getUserProfile, getStatus } from "../../redux/profile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import Status from "./Status";
import Profile from "./Profile";
import ProfilePost from "./ProfilePost";

const ContainerProfile = () => {
   const status = useSelector((state: any) => state.profileReduce.status);
   const userProfileData = useSelector((state: any) => state.profileReduce.userProfile)
   const commentData = useSelector((state: any) => state.profileReduce.commentData);
   const newPost = useSelector((state: any) => state.profileReduce.newPost);
   const isAuth = useSelector((state: any) => state.profileReduce.isAuth);
   const myId = useSelector((state: any) => state.auth.id);
   const isFetching = useSelector((state: any) => state.profileReduce.isFetching);
   const dispatch = useDispatch<any>();

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
            userData={userProfileData}
         />
      </>
   )
}

export default ContainerProfile;