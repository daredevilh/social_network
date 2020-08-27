import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'IS-FOLLOWING-IN-PROGRESS';

let inititalState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
};

const dialogsReducer = (state = inititalState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }

            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u;
                    })
                }

                case SET_USERS:
                    return {
                        ...state,
                        users: action.users
                    }

                    case SET_CURRENT_PAGE:
                        return {
                            ...state,
                            currentPage: action.currentPage
                        }

                        case SET_TOTAL_USERS_COUNT:
                            return {
                                ...state,
                                totalUsersCount: action.totalCount
                            }

                            case TOGGLE_IS_FETCHING: {
                                return {
                                    ...state,
                                    isFetching: action.isFetching
                                }
                            }

                            case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
                                return {
                                    ...state,
                                    isFollowingInProgress: action.isFollowingInProgress ? [...state.isFollowingInProgress, action.userId] : state.isFollowingInProgress.filter(id => id != action.userId)
                                }
                            }

                            default:
                                return state;
    }
};

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userId
});


export const requestUsers = (page, pageSize) => (dispatch) => { //Thunk Creator
    dispatch(toggleIsFetching(true));
    //dispatch(setCurrentPage(page));
    usersAPI.getUsers(page, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
    })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
    })
}


export default dialogsReducer