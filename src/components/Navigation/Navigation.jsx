import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><NavLink to='/profile' className={styles.animatedItem} activeClassName={styles.active}>Profile</NavLink></li>
          <li className={styles.item}><NavLink to='/dialogs' className={styles.animatedItem} activeClassName={styles.active}>Messages</NavLink></li>
          <li className={styles.item}><NavLink to='/feed' className={styles.animatedItem} activeClassName={styles.active}>News</NavLink></li>
          <li className={styles.item}><NavLink to='/music' className={styles.animatedItem} activeClassName={styles.active}>Music</NavLink></li>
          <li className={styles.item}><NavLink to='/settings' className={styles.animatedItem} activeClassName={styles.active}>Settings</NavLink></li>
          <li className={styles.item}><NavLink to='/users' className={styles.animatedItem} activeClassName={styles.active}>Users</NavLink></li>
        </ul>
      </nav>
    )
};

export default Navigation;