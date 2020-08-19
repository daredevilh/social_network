import React from 'react';
import './Header.module.css';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>

            
            <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' />
            {props.isAuth ? props.login : 
                <NavLink className={classes.loginBlock} to={'/login'}>Login</NavLink>
            }
            
        </header>
    )
};


export default Header;