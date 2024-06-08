import React from "react";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <img
        className={classes.userImg}
        src="https://th.bing.com/th/id/R.a362b253ea218254a6d13f7306376a9d?rik=plQ%2fvCKuDS4iWg&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2200000%2fphotos-photography-2215735-2560-1920.jpg&ehk=3%2bOf6Hs8NQ8Tb5j190BWaCR0s8cj7h2LjXwDX%2fCphZg%3d&risl=&pid=ImgRaw&r=0"
      />
    );
  }
  return (
    <div className={classes.content}>
      <div className={classes.desBlock}>
        <img src={props.profile.photos.large} />
      </div>
      <div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
