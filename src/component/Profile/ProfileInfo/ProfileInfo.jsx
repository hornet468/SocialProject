import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import Static from "../../common/Static";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Static />;
  }
  return (
    <div className={classes.content}>
      <div>
        <img src="https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?rs=1&pid=ImgDetMain" />
      </div>
      <div className={classes.desBlock}>
        <img src={props.profile.photos.large} />
        ava + description
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
