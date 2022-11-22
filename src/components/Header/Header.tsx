import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import './header.scss'
import { getMyAcc, LoginAcc, logOutAcc } from "../../redux/auth-slice";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Avatar } from "@mui/material";
import { Navigate, NavLink } from "react-router-dom";
import { setClass } from "../../redux/header-slice";
import { RootState, useAppDispatch } from "../../redux/redux-store";
import userNoPhoto from "../../img/userNoPhoto.png"

const Header = () => {

  const dispatch = useAppDispatch()
  const data = useSelector((state: RootState) => state.auth)
  const dataUser = useSelector((state: RootState) => state.auth.userProfile)

  useEffect(() => {
    dispatch(getMyAcc())
  }, [])

  const set = () => {
    dispatch(setClass())
  }

  const logoutProfile = () => {
    dispatch(logOutAcc())
  }

  return (
    <header className="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar sx={{ height: 70 }}>
            <div className="but-active">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={set}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Social Network
            </Typography>

            {(data.isAuth)
              ? <>
                <Button color="inherit" onClick={logoutProfile}>Logout</Button>
                <NavLink to={`/profile`}>
                  <Avatar
                    src={(!!dataUser.photos.small) ? dataUser.photos.small : userNoPhoto}
                    sx={{ width: 50, height: 50, margin: 1 }}
                  />
                </NavLink>
              </>
              : <><PersonRoundedIcon />
                <NavLink to='/login' >
                  <Button color="inherit" sx={{ color: 'white' }}>Login</Button>
                </NavLink>

              </>}

          </Toolbar>
        </AppBar>
      </Box>
    </header >
  )
}

export default Header
