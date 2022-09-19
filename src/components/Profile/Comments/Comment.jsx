import React from "react";
import './comment.css'

const Comment = (props) => {
   return (
      <div className="comment">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/800px-Google_Translate_logo.svg.png" />
         {props.text}
         <div>
            {props.likeCount} Like
         </div>
      </div>

   )
}
export default Comment;