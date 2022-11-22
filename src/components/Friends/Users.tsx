import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./findUser.scss"
import { getUserProfile } from "../../redux/profile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { useParams } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useAppDispatch } from "../../redux/redux-store";

const ContainerSelectedUser = () => {
   const params = useParams()
   const dispatch = useAppDispatch()
   const isFetching = useSelector((state: any) => state.profileReduce.isFetching);
   const userProfileData = useSelector((state: any) => state.profileReduce.userProfile)
   const id = Number(params.userId)

   useEffect(() => {
      if (params.userId) {
         dispatch(getUserProfile(id))
      }
   }, [params.userId])

   if (isFetching) return <Preloader />
   return (
      <>
         <Profile
            id={id}
            userProfileData={userProfileData} />
         <div>{JSON.stringify(userProfileData)}</div>
      </>
   )
}

export default ContainerSelectedUser;