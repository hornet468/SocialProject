import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.item}>
        <NavLink to="/profile/" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item + " " + classes.active}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages
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
      <div className="friendList">
        <h5>My friends</h5>
        <img
          className={classes.userIcon}
          src="https://th.bing.com/th/id/OIP.k7dE2dftQijg3KbpTyIObAHaHa?rs=1&pid=ImgDetMain"
        />
        <img
          className={classes.userIcon}
          src="https://th.bing.com/th/id/OIP.k7dE2dftQijg3KbpTyIObAHaHa?rs=1&pid=ImgDetMain"
        />
        <img
          className={classes.userIcon}
          src="https://th.bing.com/th/id/OIP.k7dE2dftQijg3KbpTyIObAHaHa?rs=1&pid=ImgDetMain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
