import React from 'react';
import classes from "./Post.module.css"

const Post = (props) => {
  return <div>
  <div>
   <img className={classes.icon} alt='pho' src="https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?rs=1&pid=ImgDetMain" />
   </div>
       <div>
        {props.message}
        </div>
        <span>like {props.LikeCount}</span>
       </div>
}

export default Post;


         