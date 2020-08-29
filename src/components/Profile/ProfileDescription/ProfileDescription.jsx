import React from 'react';
import classes from './ProfileDescription.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileDescription = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <img className={classes.img} src='https://image.shutterstock.com/z/stock-photo-wide-angle-panorama-autumn-forest-misty-hills-mountain-tops-in-pink-dawn-1195159864.jpg' />
            </div>
            <img className={classes.avatar} src={profile.photos.large !== null ? profile.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} />
            <h1>{profile.fullName}</h1>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        </div>
    )
};


export default ProfileDescription;