import React from 'react';
import './Header.module.css';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' />
        </header>
    )
};


export default Header;