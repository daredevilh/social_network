import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage }
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>   
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} alt="" className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button> 
                        : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <h1>{u.name}</h1>
                        <p>{u.status}</p>
                    </span>
                    <span>
                        <p>{'u.location.city'}</p>
                        <p>{'u.location.country'}</p>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;