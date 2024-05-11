import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import Static from "../../common/Static";
import UserPhoto from "../../../assets/UserPhoto.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Static />;
  }
  return (
    <div className={classes.content}>
      <div className={classes.desBlock}>
        <img src={props.profile.photos.large} />
      </div>
      <div>
        <ProfileStatus />
      </div>
    </div>
  );
};

export default ProfileInfo;
