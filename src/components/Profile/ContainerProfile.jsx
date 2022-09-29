import React from "react";
import { connect } from "react-redux";
import './profile.scss'
import { addPostCreator, updatePostCreator } from "../../redux/profile-reducer";
import Profile from "./Profile"

const mapStateToProps = (state) => {
   return {
      commentData: state.profileReduce.commentData,
      newPost: state.profileReduce.newPost
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      onPostChange: (text) => {
         dispatch(updatePostCreator(text))
      },
      sendPost: () => {
         dispatch(addPostCreator())
      }
   }
};
const ContainerFindUser = connect(mapStateToProps, mapDispatchToProps)(Profile);//create connect

export default ContainerFindUser;