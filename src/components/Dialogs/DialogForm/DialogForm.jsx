import React from 'react';
import styles from './DialogForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormControl/FormControl';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators'

const lengthValidator = maxLengthCreator(100);

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' placeholder='Enter your message' component={Textarea} validate={[requiredField, lengthValidator]} />
            <button>Send</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'dialogMessageForm'})(DialogForm);

export default DialogReduxForm;