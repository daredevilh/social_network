import React from 'react';
import './Header.module.css';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            {props.isAuth 
                ? <div className={styles.logoutBlock}><p>{props.login}</p><button onClick={props.logout}>logout</button></div>  
                : <NavLink className={styles.loginBlock} to={'/login'}><button>login</button></NavLink>
            }
        </header>
    )
};


export default Header;