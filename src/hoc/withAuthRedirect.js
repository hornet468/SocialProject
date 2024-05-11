import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  const redirectComponent = (props) => {
    if (props.isAuth == false) return <Navigate to="/login" />;
    return <Component {...props} />;
  };

  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    redirectComponent
  );

  return ConnectAuthRedirectComponent;
};
