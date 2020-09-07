import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators';
import styles from './PostForm.module.css'
import { Textarea } from '../../../common/FormControl/FormControl';

const lengthValidator = maxLengthCreator(100);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea} validate={[requiredField, lengthValidator]} placeholder='Post message' />
            <button>Add post</button>   
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(PostForm);

export default PostReduxForm;