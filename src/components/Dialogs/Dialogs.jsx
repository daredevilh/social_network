import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogReduxForm from './DialogForm/DialogForm';



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);

    let onSendMessageClick = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialogs}>
            
            <ul className={classes.dialogsList}>
                {dialogsElements}
            </ul>
            
            <ul className={classes.messages}>
                {messagesElements}
            </ul>
            
            <DialogReduxForm onSubmit={onSendMessageClick} />
            
        </div>
    )
};

export default Dialogs;