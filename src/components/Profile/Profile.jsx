import React from "react";
import Comment from "./Comments/Comment";
import './profile.scss'

const Main = (props) => {

   const commentElement = props.commentData.map(comment => <Comment text={comment.comment} likeCount={comment.like} />)
   const areaMessage = React.createRef();

   const onPostChange = () => {
      const text = areaMessage.current.value;
      props.updatePostChange(text)
   };

   const sendPost = () => {
      props.func()
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
}
export default Main;