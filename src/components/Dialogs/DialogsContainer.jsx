import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';



const DialogsContainer = (props) => {
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
};

export default DialogsContainer;