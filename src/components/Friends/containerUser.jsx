import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./findUser.scss"
import { getUserProfile } from "../../redux/profile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "../Profile/Profile";

const ContainerSelectedUser = () => {
   const params = useParams()
   const dispatch = useDispatch()
   const isFetching = useSelector(state => state.profileReduce.isFetching);
   const userProfileData = useSelector(state => state.profileReduce.userProfile)

   useEffect(() => {
      dispatch(getUserProfile(params.userId))
   }, [params.userId])

   return (
      <>
         <Preloader isFetching={isFetching} />
         <Profile
            id={params.userId}
            userProfileData={userProfileData} />
         {/* <div>{JSON.stringify(userProfileData)}</div> */}
      </>
   )
}

export default ContainerSelectedUser;