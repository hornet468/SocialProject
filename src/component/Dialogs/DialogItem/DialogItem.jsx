import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogsItem = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  );
};

export default DialogsItem;
