import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import AuthReducer from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: UsersReducer,
  auth: AuthReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
