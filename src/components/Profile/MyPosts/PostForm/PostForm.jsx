import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators';
import styles from './PostForm.module.css'
import { Textarea } from '../../../common/FormControl/FormControl';
import { afterSubmit } from '../../../../redux/profileReducer';

const lengthValidator = maxLengthCreator(100);

const PostForm = (props) => {
    return (
        <form className={styles.postForm} onSubmit={props.handleSubmit}>
            <Field className={styles.field} name='newPostText' component={Textarea} validate={[requiredField, lengthValidator]} placeholder='Post message' />
            <button>ADD POST</button>   
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'profileAddNewPostForm', onSubmitSuccess: afterSubmit})(PostForm);

export default PostReduxForm;