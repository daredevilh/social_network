import React from 'react';
import styles from './ProfileStatus.module.css';
import { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {       //Just for example
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {
                editMode 
                ? <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
                : <div>
                    <p onDoubleClick={activateEditMode}><strong>Status: </strong>{props.status || '------'}</p>
                </div>
            }    
                
                
        </div>
    )
    
}

export default ProfileStatusWithHooks;
