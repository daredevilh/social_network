import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);


    let newMessage = React.createRef();

    let onMessageTextChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageTextChange} value={props.state.newMessageText} ref={newMessage}></textarea>
                <button onClick={props.sendMessage}>Send</button>
            </div>
            
        </div>
    )
};

export default Dialogs;