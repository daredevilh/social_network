import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
          <li className={styles.item}><NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink></li>
          <li className={styles.item}><NavLink to='/feed' activeClassName={styles.active}>News</NavLink></li>
          <li className={styles.item}><NavLink to='/music' activeClassName={styles.active}>Music</NavLink></li>
          <li className={styles.item}><NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink></li>
          <li></li>
          <li className={styles.item}><NavLink to='/users' activeClassName={styles.active}>Users</NavLink></li>
        </ul>
      </nav>
    )
};

export default Navigation;