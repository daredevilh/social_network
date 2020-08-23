import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId || this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    
    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);

