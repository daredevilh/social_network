import React from 'react';
import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';



const Users = ({isFollowingInProgress, currentPage, totalUsersCount, pageSize, onPageChanged, users, follow, unfollow, ...props}) => {
    
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            {users.map(u => <User user={u} isFollowingInProgress={isFollowingInProgress} unfollow={unfollow} follow={follow} key={u.id} />)}
        </div>
    )
}

export default Users;