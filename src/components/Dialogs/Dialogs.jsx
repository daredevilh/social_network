import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
    
    
    
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);



    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onMessageTextChange = (e) => { 
        props.updateNewMessageText(e.target.value);
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
                <textarea onChange={onMessageTextChange} value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
            
        </div>
    )
};

export default Dialogs;