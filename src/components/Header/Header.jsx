import React from 'react';
import './Header.module.css';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>

            
            <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' />
            {props.isAuth 
                ? <div>{props.login} ---- <button onClick={props.logout}>logout</button></div>  
                : <NavLink className={classes.loginBlock} to={'/login'}>Login</NavLink>
            }
            
        </header>
    )
};


export default Header;