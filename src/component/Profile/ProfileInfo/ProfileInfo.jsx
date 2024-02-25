import React from'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return <div className={classes.content}>
       <div>
        <img 
          src='https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?rs=1&pid=ImgDetMain'
        />
       </div>
       <div className={classes.desBlock}>
          ava + description
          <div>
          <div>
        
          </div>
          
          </div>
       </div>
      </div>
   
};

export default ProfileInfo;