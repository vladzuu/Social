import React from "react";
import { NavLink } from "react-router-dom";
import "./dialogs.css"


const Dialog = (props) => {
   return (
      <div className="user-dialogs">
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {

   return (
      <div className='message'>
         {props.message}
      </div>
   )
}

const Dialogs = (props) => {
   const dialogElement = props.dialogData.map((person, index) => {
      return <Dialog name={person.name} id={person.id} key={index} />
   });

   const messageElement = props.messageData.map((message, index) => {
      return <Message id={message.id} message={message.message} key={index} />
   });

   return (
      <div className="dialogs-wrapper">
         <div className="dialogs">
            {dialogElement}
         </div>
         <div className="dialog">
            {messageElement}
         </div>
      </div >
   )
}

export default Dialogs;