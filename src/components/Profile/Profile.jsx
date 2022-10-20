import React from "react";
import Comment from "./Comments/Comment";
import './profile.scss'


const ProfileOther = React.memo((props) => {
   const commentElement = props.commentData.map(comment => <Comment text={comment.comment} likeCount={comment.like} id={comment.id} />)

   const areaMessage = React.createRef();

   const onPostChange = () => {
      const text = areaMessage.current.value;
      props.onPostChange(text)
   };

   const sendPost = () => {
      props.addPost()
   }

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
})

export default ProfileOther;
