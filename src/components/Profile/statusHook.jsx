import React, { useState, useEffect } from "react";


const Status = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])


   const activateEditMode = () => {
      setEditMode(true)
   }
   const deactivateEditMode = () => {
      setEditMode(false)
      props.setStatus(status)
   }

   const changeStatus = (e) => {
      setStatus(e.target.value)
   }


   return (
      <div>
         {!editMode &&
            <div>
               <span onClick={activateEditMode}>{status}</span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={changeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
            </div>
         }
      </div>
   )
}




export default Status;