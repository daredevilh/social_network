import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';



const User = ({user, isFollowingInProgress, unfollow, follow, ...props}) => {
    
    return (
        <div className={styles.userBlock}>
                <div className={styles.userAction}>
                    <div>   
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} alt="" className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div className={styles.actions}>
                        {user.followed 
                            ? <button className={styles.actionButton} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id);
                                }}>UNFOLLOW</button> 
                        
                            : <button className={styles.actionButton} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>FOLLOW</button>}
                    </div>
                </div>
                <div className={styles.userInfo}>
                    <h1>{user.name}</h1>
                    <p>{user.status}</p>
                    <p>{'City, Country'}</p>
                    <p>{'Skills'}</p>
                </div>
        </div>
    )
}

export default User;