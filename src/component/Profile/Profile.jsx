import React, { useEffect } from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {
  if (props.isAuth == false) return <Navigate to="/login" />;

  return (
    <div className={classes.content}>
      <ProfileStatus status="hi f" />
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer store={props.store} isAuth={props.isAuth} />
    </div>
  );
};

export default Profile;
