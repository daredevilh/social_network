import {createSelector} from 'reselect';

//Just an example for reselect
export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})
//End of example


export const getAllUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress;
}