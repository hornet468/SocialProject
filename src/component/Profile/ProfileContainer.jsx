import React, { useEffect } from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      props.getUserProfile(userId);
      props.getStatus(userId);
    }
  }, [userId]);

  if (!userId && !props.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={classes.content}>
      <Profile
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
