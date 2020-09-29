import React from 'react';
import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';



const Users = ({isFollowingInProgress, currentPage, totalUsersCount, pageSize, onPageChanged, users, follow, unfollow, ...props}) => {
    
    return (
        <div>
            {users.map(u => <User user={u} isFollowingInProgress={isFollowingInProgress} unfollow={unfollow} follow={follow} key={u.id} />)}
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
        </div>
    )
}

export default Users;