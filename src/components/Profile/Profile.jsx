import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
          
          <div>
            <img className={classes.img} src='https://image.shutterstock.com/z/stock-photo-wide-angle-panorama-autumn-forest-misty-hills-mountain-tops-in-pink-dawn-1195159864.jpg' />
          </div>

          <ProfileDescription />
          <MyPostsContainer />

        </div>
    )
};

export default Profile;