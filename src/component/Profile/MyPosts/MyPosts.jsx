import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/Forms/Forms";

const maxLength100 = maxLengthCreator(100);
const PostForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field
          validate={[required, maxLength100]}
          name={"PostForm"}
          component={Textarea}
          placeholder="post message"
          className={classes.input}
        />
        <div className={classes.btn}>
          <button>
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
      </form>
    </>
  );
};

const MyPosts = (props) => {
  let postsElement = props.PostsData.map((post) => (
    <Post message={post.message} LikeCount={post.LikeCount} />
  ));
  const onSubmit = (values) => {
    props.addPost(values.PostForm);
  };
  return (
    <div className={classes.postsBlock}>
      <div>
        <PostReduxForm onSubmit={onSubmit} />
      </div>

      <h2> My posts </h2>
      <div>New post</div>
      {postsElement}
    </div>
  );
};

const PostReduxForm = reduxForm({
  form: "PostForm",
})(PostForm);

export default MyPosts;
