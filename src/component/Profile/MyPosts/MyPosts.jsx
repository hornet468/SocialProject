 import React from 'react';
 import Post from './Post/Post';
 import classes from './MyPosts.module.css'

const MyPosts = (props) => {

       let newPostElement = React.createRef();

let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value='';
    
}




  
let postsElement = props.PostsData.map(post => <Post message = {post.message} LikeCount = {post.LikeCount}/>)
       return <div className={classes.postsBlock}>
       <div>
        <textarea ref={newPostElement}  />
        </div>
        <button onClick={addPost}>Post</button>
       <h2> My posts </h2>
      
        <div>
        New post
        </div>
          {postsElement}
          
       </div>
};

export default MyPosts;