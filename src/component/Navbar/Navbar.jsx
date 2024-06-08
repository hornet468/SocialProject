import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import iconCommunities from "../../assets/sidebarIcon/iconCommunities.svg";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.item}>
        <NavLink to="/profile/" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item} activeClassName={classes.active}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users/" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <a> Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
