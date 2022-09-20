import React from "react";
import Dialog from "./Element/Dialog";
import Message from "./Element/Message";
import "./messenger.scss"




const Messenger = (props) => {



   const areaMessage = React.createRef();
   const buttonClick = () => {
      const text = areaMessage.current.value;
      console.log(text)
      areaMessage.current.value = '';
   }

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
         <div className="mes-container">
            <div className="dialog">
               {messageElement}
            </div>
            <div className="sendMessage">
               <textarea ref={areaMessage}></textarea>
               <button onClick={buttonClick}>Send </button>
            </div>
         </div >
      </div>
   )
}

export default Messenger;