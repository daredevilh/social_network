import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                 .then(response => {
                    
                     props.setUsers(response.data.items);
                 });
        }
    }
    
        /*props.setUsers([
            {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: false, fullName: 'Hlib', status: 'road to web dev', location: {city: 'Lyubotin', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Vika', status: 'hey hey hey', location: {city: 'Lyubotin', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Denis', status: 'yo yo yo', location: {city: 'Manchenky', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Alesha', status: 'ho ho ho', location: {city: 'Lyubotin', country: 'Ukraine'}},
            {id: 5, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', isFollowed: true, fullName: 'Dima', status: 'anchoys', location: {city: 'Lyubotin', country: 'Ukraine'}}
        ]);*/
    
    
    
    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small !== null ? u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} alt="" className={styles.userPhoto} /></div>
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