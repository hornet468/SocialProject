import React, { useEffect } from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, [userId]);

  return (
    <div className={classes.content}>
      <Profile {...props} profile={props.profile} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
