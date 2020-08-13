import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/state';



const Dialogs = (props) => {
    
    

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);



    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onMessageTextChange = (e) => { 
        props.dispatch(updateNewMessageTextActionCreator(e.target.value));
    };
    
    return (
        <div className={classes.dialogs}>
            
            <ul className={classes.dialogsList}>
                {dialogsElements}
            </ul>
            
            <ul className={classes.messages}>
                {messagesElements}
            </ul>
            <div>
                <textarea onChange={onMessageTextChange} value={props.state.newMessageText}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
            
        </div>
    )
};

export default Dialogs;