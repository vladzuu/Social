import { Button, Pagination, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import userNoPhoto from '../../img/userNoPhoto.png'

const FindUser = ({ totalCount, currentPage, users, follow, unfollow, changePage }) => {

  const lastPage = Math.ceil(totalCount / 10)
  const handleChange = (event, value) => {
    changePage(value)
  };

  return (
    <div className="wrapper-findUser" >
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
        <Pagination count={lastPage} page={+currentPage} variant="outlined" shape="rounded" onChange={handleChange} />
      </div>

    </div >)
}
export default FindUser;