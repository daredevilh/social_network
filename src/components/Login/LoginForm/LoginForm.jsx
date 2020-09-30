import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styles from './LoginForm.module.css';
import { Input } from '../../common/FormControl/FormControl';
import { requiredField } from '../../../utils/validators/validators';

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field className={styles.textfield} placeholder='Email' name='email' component={Input} validate={requiredField} />
                <Field className={styles.textfield} placeholder='Password' type='password' name='password' component={Input} validate={[requiredField]}/>
                <div className={styles.checkboxBlock}>
                    <Field component={Input} type={'checkbox'} name='rememberMe'/>
                    <p>remember me</p>
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} />}
                {props.captchaUrl && <Field placeholder='Symbols from image' name='captcha' component={Input} validate={[requiredField]} /> }
                {props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>} 
                <button className={styles.loginButton}>login</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;