const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  PostsData: [
    { id: 1, message: "hello waorld", LikeCount: "45" },
    { id: 2, message: "how are you?", LikeCount: "4" },
  ],
  newPostText: "hello world",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        LikeCount: 0,
      };
      return {
        ...state,
        PostsData: [...state.PostsData, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;

/*if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      LikeCount: 0,
    };
    state.PostsData.push(newPost);
    state.newPostText = " ";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;*/
