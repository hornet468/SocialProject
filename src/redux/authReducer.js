import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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

    default:
      return state;
  }
};

export const setAuthUserData = (login, id, email) => ({
  type: SET_USER_DATA,
  data: { login, id, email },
});

export const authUser = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { login, id, email } = response.data.data;
      dispatch(setAuthUserData(login, id, email));
    }
  });
};

export default AuthReducer;
