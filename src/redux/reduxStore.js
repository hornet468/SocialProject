import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import AuthReducer from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: UsersReducer,
  auth: AuthReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
