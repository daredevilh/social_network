import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators';
import styles from './PostForm.module.css'
import { Textarea } from '../../../common/FormControl/FormControl';

const lengthValidator = maxLengthCreator(100);

const PostForm = (props) => {
    return (
        <form className={styles.postForm} onSubmit={props.handleSubmit}>
            <Field className={styles.field} name='newPostText' component={Textarea} validate={[requiredField, lengthValidator]} placeholder='Post message' />
            <button>Add Post</button>   
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(PostForm);

export default PostReduxForm;