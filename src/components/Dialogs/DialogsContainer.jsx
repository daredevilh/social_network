import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';


/*const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onMessageTextChange = (text) => { 
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };
    
    return (
        <Dialogs updateNewMessageText={onMessageTextChange} sendMessage={onSendMessageClick} dialogsPage={state} />
    )
};*/

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;