import React from "react";
import Comment from "./Comments/Comment";
import './profile.css'

const Main = (props) => {


   const commentElement = props.commentData.map(comment => <Comment text={comment.comment} likeCount={comment.like} />)

   return (
      <div className="Profile">
         <textarea></textarea>
         <div>
            <button>Send</button>
            <button>delete</button>
         </div>
         {commentElement}
      </div>
   )
}
export default Main;