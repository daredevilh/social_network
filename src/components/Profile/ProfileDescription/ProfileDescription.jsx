import React, {useState} from 'react';
import styles from './ProfileDescription.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileDescription = ({saveProfile, savePhoto, isOwner, profile, status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
             
    }
    
    return (
        <div className={profile}>
            <label className={styles.fileContainer}>
                <img className={styles.avatar} src={profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} />
                {isOwner && <input className={styles.inputImage} type='file' onChange={onMainPhotoSelected}/>}
            </label>
            <div className={styles.contacts}>
                {editMode ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            <div>
                {isOwner && <button onClick={goToEditMode}>edit</button>}
                <h1>{profile.fullName}</h1>
                <div>
                    <strong>Loooking for a job: </strong>{profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div>
                    <strong>My professional skills: </strong>{profile.lookingForAJobDescription}
                </div>
                <div>
                    <strong>About me: </strong>{profile.aboutMe}
                </div>
            </div>

            <div>
                <strong>Contacts: </strong>{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
    </>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><strong>{contactTitle}: </strong>{contactValue}</div>
}

export default ProfileDescription;