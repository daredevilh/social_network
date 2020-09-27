import React from 'react';
import styles from './Profile.module.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileDescription saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer small={props.profile.photos.small} large={props.profile.photos.large} />
        </div>
    )
};

export default Profile;