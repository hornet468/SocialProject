import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer store={props.store} isAuth={props.isAuth} />
    </div>
  );
};

export default Profile;
