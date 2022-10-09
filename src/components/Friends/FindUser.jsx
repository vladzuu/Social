import React from "react";
import { NavLink } from "react-router-dom";

const FindUser = (props) => {

   const arrayPages = [];
   const endPage = Math.ceil(props.totalCount / 10)
   for (let i = 1; i <= endPage; i++) {
      arrayPages.push(i)
   }
   let curP = props.currentPage;
   let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
   let curPL = curP + 2;
   let slicedPages = arrayPages.slice(curPF, curPL)
   if (curP >= 3) { slicedPages.unshift(1) }
   slicedPages.push(endPage)


   return (
      <div div className="wrapper-findUser" >
         {props.users.map((user) => <div className="wrapper-user">
            <div className="user-find">
               <div className="ava-subscribe">
                  <NavLink to={`/findUser/id/${user.id}`}><img src={user.photos.small} className='ava-find'></img></NavLink>
                  {user.subscribe ? <button key={user.id} onClick={() => props.unsubscribe(user.id)}>Unsubscribe</button>
                     : <button key={user.id} onClick={() => props.subscribe(user.id)}>Subscribe</button>
                  }
               </div>
               <div className="info-user">

                  {user.name}
                  {user.city}
                  {user.status}
               </div>
            </div >

         </div>
         )
         }
         <div className="pages">
            {slicedPages.map(page => {
               return <div className='page-scroll' onClick={() => props.changePage(page)}>{page}</div>
            })}
         </div>

      </div >)
}
export default FindUser;