import React from 'react';
import {connect} from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, requestUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {getIsFollowingInProgress, getCurrentPage, getAllUsers, getPageSize, getTotalUsersCount, getIsFetching } from '../../redux/usersSelectors';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        //this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
    }
    
    render() {
        return <>
                {this.props.isFetching ? <Preloader />  :
                <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      isFollowingInProgress={this.props.isFollowingInProgress}
            />}
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}


export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers: requestUsers})
)(UsersAPIComponent);