import React, { useEffect, useRef } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import Dialog from "./Element/Dialog"
import Message from "./Element/Message"
import "./messenger.scss"
import { updateMessage, addMessage } from "../../redux/messenger-reducer"
import { Navigate } from "react-router-dom"
import { RootState } from "../../redux/redux-store"

const Messenger = () => {
  const areaMessage = useRef<any>()
  const dispatch = useDispatch()
  const messageData = useSelector((state: RootState) => state.messengerReduce.messageData)
  const dialogData = useSelector((state: RootState) => state.messengerReduce.dialogData)
  const messageNew = useSelector((state: RootState) => state.messengerReduce.messageNew.message)
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  const updateMes = () => {
    if (areaMessage.current) {
      let message = areaMessage.current.value
      dispatch(updateMessage(message))
    }
  }
  const sendMessage = () => {
    dispatch(addMessage())
  }

  const dialogElement = dialogData.map((person) => {
    return <Dialog dialogData={person} key={person.id} />
  })
  const messageElement = messageData.map((message, index) => {
    return <Message id={message.id} message={message.message} key={index} />
  })

  if (!isAuth) { return <Navigate to={'/login'} /> }

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
          <textarea ref={areaMessage} value={messageNew} onChange={updateMes}></textarea>
          <button onClick={sendMessage}>Send </button>
        </div>
      </div >
    </div>
  )
}

export default Messenger;