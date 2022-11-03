import React, { useState, useEffect, ChangeEvent } from "react";
import { setStatus } from "../../redux/profile-reducer";
import { useAppDispatch } from "../../redux/redux-store";

type PropsType = {
   status: string
   setStatus: (status: string) => void
}
const Status = (props: PropsType) => {
   const dispatch = useAppDispatch()

   let [editMode, setEditMode] = useState(false)
   let [status, setStatusLocal] = useState(props.status)

   useEffect(() => {
      setStatusLocal(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      dispatch(setStatus(status))
   }

   const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      setStatusLocal(e.target.value)
   }

   return (
      <div className="test">
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