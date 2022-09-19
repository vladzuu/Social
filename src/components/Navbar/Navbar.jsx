import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const setActive = data => data.isActive ? 'link-Active' : '';
const Navbar = () => {
   return (
      <div className="navbar">
         <ul>
            <li><NavLink to='/profile' className={setActive}>Profile</NavLink></li>
            <li><NavLink to='/dialogs' className={setActive}>Dialogs</NavLink></li>
            <li><NavLink to='/music' className={setActive}>Music</NavLink></li>
            <li><NavLink to='/news' className={setActive}>News</NavLink></li>
            <li><NavLink to='/setting' className={setActive}>Setting</NavLink></li>
         </ul>
      </div >
   )
}
export default Navbar;