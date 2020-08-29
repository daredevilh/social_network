import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';



const User = ({user, isFollowingInProgress, unfollow, follow, ...props}) => {
    
    return (
        <div>
                <span>
                    <div>   
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} alt="" className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                            
                            ? <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id);
                                }}>UNFOLLOW</button> 
                        
                            : <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <h1>{user.name}</h1>
                        <p>{user.status}</p>
                    </span>
                    <span>
                        <p>{'u.location.city'}</p>
                        <p>{'u.location.country'}</p>
                    </span>
                </span>
        </div>
    )
}

export default User;