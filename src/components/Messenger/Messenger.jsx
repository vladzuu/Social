import React from "react";
import { connect } from "react-redux";
import Dialog from "./Element/Dialog";
import Message from "./Element/Message";
import "./messenger.scss"
import { updateMessageAC, addMessageAC } from "../../redux/messenger-reducer";
import { Navigate } from "react-router-dom";

const Messenger = (props) => {
   const areaMessage = React.createRef();

   const updateMessage = () => {
      let message = areaMessage.current.value
      props.updateMessage(message)
   };
   const sendMessage = () => {
      props.addMessage()
   };
   const dialogElement = props.dialogData.map((person, index) => {
      return <Dialog dialogData={person} />
   });
   const messageElement = props.messageData.map((message, index) => {
      return <Message id={message.id} message={message.message} key={index} />
   });
   // if (!props.isAuth) { return <Navigate to={'/login'} /> }

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
               <textarea ref={areaMessage} value={props.messageNew} onChange={updateMessage}></textarea>
               <button onClick={sendMessage}>Send </button>
            </div>
         </div >
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      messageData: state.messengerReduce.messageData,
      dialogData: state.messengerReduce.dialogData,
      messageNew: state.messengerReduce.messageNew.message,
      isAuth: state.auth.isAuth
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageAC())
      },
      updateMessage: (message) => {
         dispatch(updateMessageAC(message))
      }
   }
}
const ContainerMessenger = connect(mapStateToProps, mapDispatchToProps)(Messenger)



export default ContainerMessenger;