import React from 'react';
import { Textarea, Input } from '../../common/FormControl/FormControl';
import { reduxForm, Field } from 'redux-form';
import classes from './ProfileDescription.module.css';


const ProfileDataReduxForm = ({ profile, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <strong>Full name: </strong>
                <Field name='fullName' placeholder='Enter your full name' component={Input} validate={[]} />
            </div>
            <div>
                <strong>Looking for a job: </strong>
                <Field type='checkbox' name='lookingForAJob' placeholder='' component={Input} validate={[]} />                
            </div>
            <div>
                <strong>Professional skills: </strong>
                <Field name='lookingForAJobDescription' placeholder='Enter your professional skills' component={Textarea} validate={[]} />
            </div>
            <div>
                <strong>About you: </strong>
                <Field name='aboutMe' placeholder='' component={Input} validate={[]} />
            </div>
            <div>
                <strong>Contacts: </strong> {Object.keys(profile.contacts).map(key => {
                    return <div className={classes.contact}>
                        <strong>{key}: </strong>
                        <Field placeholder={key} key={key} name={`contacts.${key}`} component={Input} validate={[]} />
                    </div>
                })}
            </div>
            <button>Save</button>
            {error && <div className={classes.formSummaryError}>
                {error}    
            </div>}
        </form>
    )
}

const ProfileDataForm = reduxForm({form: 'editProfile'})(ProfileDataReduxForm); 

export default ProfileDataForm