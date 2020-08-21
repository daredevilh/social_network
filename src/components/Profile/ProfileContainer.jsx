import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {getUserProfile} from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    
    componentDidMount () {
        let userId = this.props.match.params.userId || this.props.userId;
        this.props.getUserProfile(userId);
    }
    
    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);  

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
