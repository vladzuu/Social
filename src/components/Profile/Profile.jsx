import React from "react";
import Comment from "./Comments/Comment";
import './profile.scss'
import { addPostCreator, updatePostCreator } from "../../redux/profile-reducer";


const Profile = (props) => {
   const commentElement = props.commentData.map(comment => <Comment text={comment.comment} likeCount={comment.like} />)

   const areaMessage = React.createRef();

   const onPostChange1 = () => {
      const text = areaMessage.current.value;
      props.onPostChange(text)
   };

   const sendPost = () => {
      props.sendPost()
   }

   return (
      <div className="profile">
         <textarea onChange={onPostChange1} ref={areaMessage} value={props.newPost.text}></textarea>
         <div>
            <button onClick={sendPost}>Send</button>
            <button>delete</button>
         </div>
         {commentElement}
      </div>
   )

}

export default Profile;
