import React from "react";
import Dialog from "./Element/Dialog";
import Message from "./Element/Message";
import "./messenger.css"




const Messenger = (props) => {

   const dialogElement = props.dialogData.map((person, index) => {
      return <Dialog dialogData={person} />
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

export default Messenger;