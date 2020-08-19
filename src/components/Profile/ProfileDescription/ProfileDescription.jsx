import React from 'react';
import classes from './ProfileDescription.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileDescription = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <img className={classes.img} src='https://image.shutterstock.com/z/stock-photo-wide-angle-panorama-autumn-forest-misty-hills-mountain-tops-in-pink-dawn-1195159864.jpg' />
            </div>
            <img className={classes.avatar} src={props.profile.photos.large} />
            <h1>{props.profile.fullName}</h1>
            <p>21 years old</p>
            <p>status: {props.profile.aboutMe}</p>

        </div>
    )
};


export default ProfileDescription;