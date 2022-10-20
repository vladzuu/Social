import React from "react";
import { connect } from "react-redux";
import './profile.scss'
import { onPostChange, addPost, toggleIsFetching, setStatus, getMyProfile, getStatus } from "../../redux/profile-reducer";
import ProfileOther from "./Profile"
import Preloader from "../Common/Preloader/Preloader";
import { Navigate } from 'react-router-dom'
import Status from "./statusHook";


class Profile extends React.Component {

   componentDidMount() {
      this.props.getMyProfile(this.props.myId)
      this.props.getStatus(this.props.myId)
   }

   render() {
      if (!this.props.isAuth) { return <Navigate to={'/login'} /> }
      return (
         <>
            <Preloader
               isFetching={this.props.isFetching} />
            <Status status={this.props.status} setStatus={this.props.setStatus} />
            <ProfileOther
               commentData={this.props.commentData}
               newPost={this.props.newPost}
               onPostChange={this.props.onPostChange}
               addPost={this.props.addPost}
            />
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      status: state.profileReduce.status,
      commentData: state.profileReduce.commentData,
      newPost: state.profileReduce.newPost,
      isAuth: state.auth.isAuth,
      myId: state.auth.id,
      isFetching: state.findUserReduce.isFetching,
   }
};

const ContainerProfile = connect(mapStateToProps, {
   onPostChange, addPost, toggleIsFetching, setStatus, getMyProfile, getStatus
})(Profile);

export default ContainerProfile;