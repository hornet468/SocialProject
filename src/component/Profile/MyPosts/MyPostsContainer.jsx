import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    PostsData: state.profilePage.PostsData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostTextActionCreator: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

/*import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      addPost={addPost}
      updateNewPostTextActionCreator={onPostChange}
      PostsData={state.profilePage.PostsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;*/
