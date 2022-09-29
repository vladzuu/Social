import React from "react"
import { NavLink } from "react-router-dom";
import './message.scss'

const Message = (props) => {

   return (

      <div className='message'>
         <div className={props.id}>
            <div className="massage-container">
               {props.message}
            </div>
         </div>
      </div>


   )
};

export default Message;