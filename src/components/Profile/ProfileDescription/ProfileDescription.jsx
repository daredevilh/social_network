import React from 'react';
import classes from './ProfileDescription.module.css';

const ProfileDescription = (props) => {
    return (
        <div>
            <img className={classes.avatar} src='https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg' />
            <h1>Hlib Zinchenko</h1>
            <p>21 years old</p>
        </div>
    )
};


export default ProfileDescription;