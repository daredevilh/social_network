import React from 'react';
import {reduxForm, Field} from 'redux-form';
import styles from './LoginForm.module.css';
import { Input } from '../../common/FormControl/FormControl';
import { requiredField } from '../../../utils/validators/validators';

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field placeholder='Email' name='email' component={Input} validate={requiredField} />
                <Field placeholder='Password' type='password' name='password' component={Input} validate={[requiredField]}/>
                <div>
                    <Field component={Input} type={'checkbox'} name='rememberMe'/>
                    remember me
                </div>
                {props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>} 
                <button>Login</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;