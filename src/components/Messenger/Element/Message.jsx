import React from "react"

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