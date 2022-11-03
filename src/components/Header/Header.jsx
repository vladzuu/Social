import { connect, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import './header.scss'
import { getMyAcc } from "../../redux/auth-slice";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { setClass } from "../../redux/header-slice";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = (props) => {

   const dispatch = useDispatch()

   useEffect(() => {
      props.getMyAcc()
   }, [])

   const set = () => {
      dispatch(setClass())
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
                  {(props.data.isAuth)
                     ? <>
                        <Button color="inherit">Logout</Button>
                        <NavLink to={`/profile`}>
                           <Avatar
                              src={props.dataUser.photos.small}
                              sx={{ width: 50, height: 50, margin: 1 }}
                           />
                        </NavLink>
                     </>
                     : <><PersonRoundedIcon />
                        <Button color="inherit">Login</Button>
                     </>}

               </Toolbar>
            </AppBar>
         </Box>
      </header >
   )
}

const mapStateToProps = (state) => {
   return {
      data: state.auth,
      dataUser: state.auth.userProfile
   }
}
const HeaderConnect = connect(mapStateToProps, { getMyAcc })(Header)
export default HeaderConnect;