import React from 'react';
import styles from './Profile.module.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileDescription saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <div className={styles.indent}></div>
            <MyPostsContainer profile={props.profile} />
        </div>
    )
};

export default Profile;