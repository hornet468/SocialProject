import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let postsElement = props.PostsData.map((post) => (
    <Post message={post.message} LikeCount={post.LikeCount} />
  ));
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextActionCreator(text);
  };
  return (
    <div className={classes.postsBlock}>
      <div>
        <input
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          className={classes.input}
          placeholder="text"
        ></input>
      </div>
      <div className={classes.btn}>
        <button onClick={onAddPost}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>

      <h2> My posts </h2>

      <div>New post</div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
