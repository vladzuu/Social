import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import userNoPhoto from '../../img/userNoPhoto.png'

const FindUser = ({ totalCount, currentPage, users, follow, unfollow, changePage }) => {
   const arrayPages = [];
   const endPage = Math.ceil(totalCount / 10)
   for (let i = 1; i <= endPage; i++) {
      arrayPages.push(i)
   }
   let curP = currentPage;
   let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
   let curPL = curP + 2;
   let slicedPages = arrayPages.slice(curPF, curPL)
   if (curP >= 3) { slicedPages.unshift(1) }
   slicedPages.push(endPage)

   return (
      <div div className="wrapper-findUser" >
         {users.map((user) => <div className="wrapper-user" key={user.id}>
            <div className="user-find" >
               <div className="ava-subscribe">

                  <NavLink to={`/findUser/id/${user.id}`}>
                     {(user.photos.small)
                        ? <img src={user.photos.small} className='ava-find' />
                        : <img src={userNoPhoto} className='ava-find' />}
                  </NavLink>

                  {user.followed ?
                     <Button variant="contained" key={user.id}
                        onClick={() => unfollow(user.id)
                        }>Unfollow</Button>
                     : <Button variant="contained" key={user.id}
                        onClick={() => follow(user.id)
                        }>Subscribe</Button>
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
               return <div className='page-scroll' onClick={() => changePage(page)} key={page}>{page}</div>
            })}
         </div>

      </div >)
}
export default FindUser;