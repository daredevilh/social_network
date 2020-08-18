import React from 'react';
import preloader from './../../../assets/images/preloader.svg';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div style={{maxWidth: '100px'}}>
            <img src={preloader} style={{backgroundColor: 'bisque'}}/>
        </div>
    )
};

export default Preloader;