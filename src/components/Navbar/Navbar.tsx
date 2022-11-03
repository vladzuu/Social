import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.scss'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from "react-redux";

const Navbar = () => {

   const elementClass = useSelector((state: any) => state.header.nameCssClass)

   return (
      <div className={elementClass}>

         <NavLink to='/profile' >
            <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<AccountCircleIcon />}>MyProfile</Button>
         </NavLink>

         <NavLink to='/messenger' >
            <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<MessageIcon />}>Messages</Button>
         </NavLink>

         <NavLink to='/music' >
            <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<LibraryMusicIcon />}>Music</Button>
         </NavLink>

         <NavLink to='/news' >
            <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<NewspaperIcon />}>News</Button>
         </NavLink>

         <NavLink to='/findUser' >
            <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<PeopleIcon />}>Find Friend</Button>
         </NavLink>

         <NavLink to='/setting' >
            <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<SettingsIcon />}>Setting</Button>
         </NavLink>
      </div >
   )
}
export default Navbar;

