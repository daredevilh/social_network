import React from 'react';
import styles from './DialogForm.module.css';
import { reduxForm, Field } from 'redux-form';

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' placeholder='Enter your message' component='textarea' />
            <button>Send</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'dialogMessageForm'})(DialogForm);

export default DialogReduxForm;