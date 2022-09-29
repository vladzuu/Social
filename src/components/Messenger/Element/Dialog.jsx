import React from "react"
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
   return (
      <div className="user-dialogs">
         <img className="avaMessage" src={props.dialogData.ava}></img>
         <NavLink to={'/messenger/' + props.dialogData.id}>{props.dialogData.name}</NavLink>
      </div >
   )
};

export default Dialog
