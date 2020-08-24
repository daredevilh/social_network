import React from 'react';
import {reduxForm, Field} from 'redux-form';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field placeholder='Login' name='login' component='input'/>
                <Field placeholder='Password' name='password' component='input'/>
                <div>
                    <Field type='checkbox' name='rememberMe' component='input'/>
                    remember me
                </div> 
                <button>Login</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;