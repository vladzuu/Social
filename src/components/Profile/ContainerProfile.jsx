import React from "react";
import { connect } from "react-redux";
import './profile.scss'
import { onPostChange, addPost, toggleIsFetching } from "../../redux/profile-reducer";
import ProfileOther from "./Profile"
import Preloader from "../Common/Preloader/Preloader";
import axios from "axios";


class Profile extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/26107')
         .then(response => this.props.toggleIsFetching(false)
         )
   }



   render() {
      return (
         <>
            <Preloader
               isFetching={this.props.toggleIsFetching} />
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
      commentData: state.profileReduce.commentData,
      newPost: state.profileReduce.newPost
   }
};

const ContainerProfile = connect(mapStateToProps, { onPostChange, addPost, toggleIsFetching })(Profile);//create connect

export default ContainerProfile;