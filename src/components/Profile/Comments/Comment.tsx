import React from "react";
import { CommentDataType } from "../../../redux/profile-reducer";
import './comment.scss'
interface props {
   comment: string
   like: number
   id: number

}
const Comment = ({ id, comment, like }: props) => {
   return (
      <div className="comment" key={id}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" />
         {comment}
         <div>
            {like} Like
         </div>
      </div>

   )
}
export default Comment;