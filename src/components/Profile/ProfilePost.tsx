import { Edit, Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { onPostChange, addPost, UserProfileType } from "../../redux/profile-reducer";
import { CommentDataType } from "../../redux/profile-reducer";
import { useAppDispatch } from "../../redux/redux-store";
import Comment from "./Comments/Comment";
import './profile.scss'


interface PropsType {
   commentData: CommentDataType[]
   newPost: { text: string }
   userData: UserProfileType
}
const ProfilePost = React.memo((props: PropsType) => {

   const commentElement = props.commentData.map(comment => {
      return <Comment
         key={comment.id}
         userData={props.userData}
         comment={comment.comment}
         like={comment.like}
         id={comment.id}
      />
   })

   const dispatch = useAppDispatch()

   const areaMessage = useRef<HTMLTextAreaElement>(null)

   const PostChange = () => {
      if (areaMessage.current) {
         const text = areaMessage.current.value;
         dispatch(onPostChange(text))
      }
   };

   const sendPost = () => {
      dispatch(addPost())
   }

   return (
      <div className="profile">
         <div className="post-send-area">
            <textarea onChange={PostChange} ref={areaMessage} value={props.newPost.text} />
            <Button variant="contained" onClick={sendPost} endIcon={<Send />} >Send</Button>
         </div>
         <div className="container-posts">
            {commentElement}
         </div>
      </div>
   )
})

export default ProfilePost;
