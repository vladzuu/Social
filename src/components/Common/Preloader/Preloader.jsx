import React from "react";
import preloader from "../../../img/preloader.gif"

const Preloader = (props) => {
   return (<>
      {props.isFetching ? <img src={preloader} /> : null}
   </>
   )
}

export default Preloader;