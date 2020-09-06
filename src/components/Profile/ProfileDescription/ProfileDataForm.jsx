import React from 'react';
import { Textarea, Input } from '../../common/FormControl/FormControl';
import { reduxForm, Field } from 'redux-form';


const ProfileDataForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            <div>
                <strong>Full name: </strong>
                <Field name='fullName' placeholder='Enter your full name' component={Input} validate={[]} />
            </div>
            <div>
                <strong>Loooking for a job: </strong>
                <Field type='checkbox' name='lookingForAJob' placeholder='' component={Input} validate={[]} />                
            </div>
            <div>
                <strong>Professional skills: </strong>
                <Field name='professionalSkills' placeholder='Enter your professional skills' component={Textarea} validate={[]} />
            </div>
            <div>
                <strong>About you: </strong>
                <Field name='aboutMe' placeholder='' component={Input} validate={[]} />
            </div>
            
        </form>
    )
}


export default reduxForm({form: 'editProfile'})(ProfileDataForm);