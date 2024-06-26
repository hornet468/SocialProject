import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
});

let store = createStore(reducers);

export default store;
