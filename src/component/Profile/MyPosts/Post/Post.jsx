import React from "react";
import classes from "./Post.module.css";
import UserPhoto from "../../../../assets/UserPhoto.jpeg";
import like from "../../../../assets/like.png";

const Post = (props) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <img className={classes.icon} alt="pho" src={UserPhoto} />
      </div>
      <div className={classes.container}>
        <div className={classes.post}>{props.message}</div>
      </div>
      <span>
        <img className={classes.Like} src={like} /> {props.LikeCount}
      </span>
    </div>
  );
};

export default Post;
