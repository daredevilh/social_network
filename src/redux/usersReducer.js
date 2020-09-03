import {usersAPI} from '../api/api';
import { updateObjectInArray } from '../utils/objectHelpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'IS-FOLLOWING-IN-PROGRESS';

let inititalState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
};

const usersReducer = (state = inititalState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
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

        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
                }
            
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: 
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress ? [...state.isFollowingInProgress, action.userId] : state.isFollowingInProgress.filter(id => id != action.userId)
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


export const requestUsers = (page, pageSize) => async (dispatch) => { //Thunk Creator
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page)); //for paginator
    
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingInProgress(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}


export default usersReducer;