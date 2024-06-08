import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN_USERS_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USERS_FAILURE = "LOGIN_USERS_FAILURE";

let initialState = {
  login: null,
  id: null,
  email: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOGIN_USERS_SUCCESS:
      return { ...state, isAuth: true, id: action.verification };
    case LOGIN_USERS_FAILURE:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (login, id, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { login, id, email, isAuth },
});

export const getLoginUsers = (verification) => ({
  type: LOGIN_USERS_SUCCESS,
  verification,
});
export const notLoginUsers = () => ({ type: LOGIN_USERS_FAILURE });

export const authUser = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { login, id, email } = response.data.data;
      dispatch(setAuthUserData(login, id, email, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authUser());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};
export default AuthReducer;
