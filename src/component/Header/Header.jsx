import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.login}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login}{" "}
            <button className={classes.btn} onClick={props.logout}>
              log out
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <img src="https://static.vecteezy.com/system/resources/previews/000/575/347/original/vector-login-sign-icon.jpg" />
          </NavLink>
        )}
      </div>
      <h2>Social Media</h2>
    </div>
  );
};

export default Header;
