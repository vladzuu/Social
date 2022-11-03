import { CircularProgress } from "@mui/material";
import React from "react";

const Preloader = () => {
   return (<div className="spinner">
      <CircularProgress size={100} />
   </div>
   )
}

export default Preloader;