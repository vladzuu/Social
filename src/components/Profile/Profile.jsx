import React from "react";
import { connect } from "react-redux";
import Comment from "./Comments/Comment";
import './profile.scss'
import { addPostCreator, updatePostCreator } from "../../redux/profile-reducer";



const Main = (props) => {

   const commentElement = props.commentData.map(comment => <Comment text={comment.comment} likeCount={comment.like} />)
   const areaMessage = React.createRef();

   const onPostChange = () => {
      const text = areaMessage.current.value;
      props.dispatch(updatePostCreator(text))
   };

   const sendPost = () => {
      props.dispatch(addPostCreator())
   };

   return (
      <div className="profile">
         <textarea onChange={onPostChange} ref={areaMessage} value={props.newPost.text}></textarea>
         <div>
            <button onClick={sendPost}>Send</button>
            <button>delete</button>
         </div>
         {commentElement}
      </div>
   )
}



export default Main;