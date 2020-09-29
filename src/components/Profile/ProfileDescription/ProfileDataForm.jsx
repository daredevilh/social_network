import React from 'react';
import { Textarea, Input } from '../../common/FormControl/FormControl';
import { reduxForm, Field } from 'redux-form';
import styles from './ProfileDescription.module.css';


const ProfileDataReduxForm = ({ profile, handleSubmit, error }) => {
    return (
        <form className={styles.editForm} onSubmit={handleSubmit}>
            <div>
                <p>Full name: </p>
                <Field name='fullName' placeholder='Enter your full name' component={Input} validate={[]} />
            </div>
            <div>
                <p>Looking for a job: </p>
                <Field type='checkbox' name='lookingForAJob' placeholder='' component={Input} validate={[]} />                
            </div>
            <div>
                <p>Professional skills: </p>
                <Field name='lookingForAJobDescription' placeholder='Enter your professional skills' component={Textarea} validate={[]} />
            </div>
            <div>
                <p>About you: </p>
                <Field name='aboutMe' placeholder='' component={Input} validate={[]} />
            </div>
            <div>
                <p>Contacts: </p> {Object.keys(profile.contacts).map(key => {
                    return <div className={styles.editContact}>
                        <p>{key}: </p>
                        <Field placeholder={key} key={key} name={`contacts.${key}`} component={Input} validate={[]} />
                    </div>
                })}
            </div>
            <button className={styles.editButton}>Save</button>
            {error && <div className={styles.formSummaryError}>
                {error}    
            </div>}
        </form>
    )
}

const ProfileDataForm = reduxForm({form: 'editProfile'})(ProfileDataReduxForm); 

export default ProfileDataForm