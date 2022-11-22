import { Badge, Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/redux-store";
import './navbar.scss'
import { setClass } from "../../redux/header-slice";
import { styled } from '@mui/material/styles';

const Navbar = () => {

  const elementClass = useSelector((state: RootState) => state.header.nameCssClass)
  const dispatch = useAppDispatch()
  const handler = () => {
    if (window.innerWidth < 700) {
      dispatch(setClass())
    }
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 5,
      top: 20,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <div className={elementClass} onClick={handler}>

      <NavLink to='/profile' >
        <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<AccountCircleIcon />}>MyProfile</Button>
      </NavLink>

      <NavLink to='/messenger' >
        <StyledBadge badgeContent={4} color="primary">
          <Button variant="text" sx={{ padding: 2, width: '100%', justifyContent: 'flex-start' }} startIcon={<MessageIcon />}>Messages</Button>
        </StyledBadge>

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

