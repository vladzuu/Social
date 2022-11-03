import React from "react";
import ProfilePost from "../ProfilePost";
import './comment.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Edit } from "@mui/icons-material";
import { AnyAaaaRecord } from "dns";
import { IconButton } from "@mui/material";

interface props {
   comment: string
   like: number
   id: number
   userData: any
}
const Comment = ({ id, comment, like, userData }: props) => {

   const editComment = () => {
      console.log('1')
   }

   return (
      <div className="comment">
         <div className="flex">
            <img src={userData.photos.small} />
            <div>{comment}</div>
            <Edit onClick={editComment}
               sx={{ cursor: 'pointer', position: "absolute", top: 0, right: 0 }} />
         </div>
         <div className="flex">
            {like}

            <FavoriteIcon sx={{ color: 'grey' }} />

         </div>

      </div>

   )
}
export default Comment;