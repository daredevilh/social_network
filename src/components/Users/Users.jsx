import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: false, fullName: 'Hlib', status: 'road to web dev', location: {city: 'Lyubotin', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Vika', status: 'hey hey hey', location: {city: 'Lyubotin', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Denis', status: 'yo yo yo', location: {city: 'Manchenky', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Alesha', status: 'ho ho ho', location: {city: 'Lyubotin', country: 'Ukraine'}},
            {id: 5, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Dima', status: 'anchoys', location: {city: 'Lyubotin', country: 'Ukraine'}}
        ]);
    }
    
    
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} alt="" className={styles.userPhoto} /></div>
                    <div>
                        {u.isFollowed ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button> 
                        : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <h1>{u.fullName}</h1>
                        <p>{u.status}</p>
                    </span>
                    <span>
                        <p>{u.location.city}</p>
                        <p>{u.location.country}</p>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;