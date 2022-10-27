import { CircularProgress } from "@mui/material";
import React from "react";
interface props {
   isFetching: boolean
}

const Preloader = ({ isFetching }: props) => {
   return (<>
      {isFetching ? <CircularProgress /> : null}
   </>
   )
}

export default Preloader;