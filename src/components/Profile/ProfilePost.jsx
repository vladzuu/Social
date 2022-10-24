import React from "react";
import { useDispatch } from "react-redux";
import Comment from "./Comments/Comment";
import './profile.scss'


const ProfilePost = React.memo((props) => {
   const commentElement = props.commentData.map(comment => {
      return <Comment text={comment.comment} likeCount={comment.like} id={comment.id} key={comment.id} />
   })
   const dispatch = useDispatch()
   const areaMessage = React.createRef();

   const onPostChange = () => {
      const text = areaMessage.current.value;
      dispatch(props.onPostChange(text))
   };

   const sendPost = () => {
      dispatch(props.addPost())
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

export default ProfilePost;
