import { Button, TextField } from "@mui/material";
import React from "react";
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
         comment={comment.comment}
         like={comment.like}
         id={comment.id}
      />
   })

   const dispatch = useAppDispatch()
   const areaMessage = React.createRef<HTMLTextAreaElement>();

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
         <textarea onChange={PostChange} ref={areaMessage} value={props.newPost.text} />
         <div>

            <Button variant="contained" onClick={sendPost}>Send</Button>
            <Button variant="contained" onClick={sendPost}>delete</Button>
         </div>
         {commentElement}
      </div>
   )
})

export default ProfilePost;
