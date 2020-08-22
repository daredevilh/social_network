import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);