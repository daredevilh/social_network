import React from 'react';
import './Header.module.css';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            {props.isAuth 
                ? <div className={classes.logoutBlock}><p>{props.login}</p><button onClick={props.logout}>logout</button></div>  
                : <NavLink className={classes.loginBlock} to={'/login'}>Login</NavLink>
            }
        </header>
    )
};


export default Header;