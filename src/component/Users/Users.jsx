import React from "react";
import classes from "./users.module.css";
import UsersPhoto from "../../assets/UserPhoto.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.wrapper}>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p ? classes.font : null} // Оновлено перевірку на рівність
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : UsersPhoto}
                  className={classes.userImg}
                  alt="User"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)} // Оновлено властивість для визначення прогресу
                  onClick={() => {
                    props.unfollow(u);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)} // Оновлено властивість для визначення прогресу
                  onClick={() => {
                    props.follow(u);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
