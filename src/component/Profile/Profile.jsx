import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return <div className={classes.content}>
      <ProfileInfo />
       <MyPosts 
       profilePage={props.profilePage.PostsData}
      
       PostsData={props.profilePage.PostsData} addPost={props.addPost}/>
       
      </div>
   
};

export default Profile;