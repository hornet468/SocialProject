import React, { useEffect } from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      props.getUserProfile(userId);
    }
  }, [userId]);

  if (!userId && !props.isAuth) {
    return <Navigate to="/login" />; // Перенаправити на сторінку логіну, якщо немає userId і користувач не авторизований
  }

  return (
    <div className={classes.content}>
      <Profile {...props} profile={props.profile} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let AuthRedirectComponent = withAuthRedirect(Profile);

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer);
