import React from 'react'
import {reduxForm, Field} from 'redux-form';
import styles from './PostForm.module.css'


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component='textarea' />
            <button>Add post</button>   
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(PostForm);

export default PostReduxForm