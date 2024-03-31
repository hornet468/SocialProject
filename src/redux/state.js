import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    messagePage: {
      DialogsData: [
        { id: 1, name: "Nikita" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Tom" },
        { id: 4, name: "Obama" },
      ],
      MessageData: [
        { id: 1, message: "hi" },
        { id: 2, message: "what are you doing" },
        { id: 3, message: "yo" },
        { id: 4, message: "I will win" },
      ],
      newMessageBody: " ",
    },

    profilePage: {
      PostsData: [
        { id: 1, message: "hello world", LikeCount: "45" },
        { id: 2, message: "how are you?", LikeCount: "4" },
      ],
      newPostText: "hello world",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
