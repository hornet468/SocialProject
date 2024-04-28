import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.login}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to="/login">
            <img src="https://static.vecteezy.com/system/resources/previews/000/575/347/original/vector-login-sign-icon.jpg" />
          </NavLink>
        )}
      </div>
      <img
        alt="hed"
        src="https://th.bing.com/th/id/OIP.nFhrod_FDgL2sHtuRQyAOwHaHe?rs=1&pid=ImgDetMain"
      />
    </div>
  );
};

export default Header;
