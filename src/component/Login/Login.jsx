import React from "react";
import classes from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { redirect } from "react-router-dom";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/Forms/Forms";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <div className={classes.wrapper}>
      <form onSubmit={props.handleSubmit} className={classes.formWrapper}>
        <div>
          <Field
            placeholder={"login"}
            name={"email"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            validate={[required]}
            placeholder={"password"}
            name={"password"}
            component={Input}
            type="password"
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input} />
          remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    <redirect to={"/profile"} />;
  }
  return (
    <div className={classes.loginWrapper}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
