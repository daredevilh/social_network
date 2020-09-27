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
        <div className={styles.profile}>
            <div className={styles.profileDescription}>
                {editMode ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} />}

            </div>
            <div className={styles.photoContactBlock}>
                <label className={styles.fileContainer}>
                    <img className={styles.avatar} src={profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiuNTmUWSMIV5d4jUHP_UgIpTZHt7bElWqAw&usqp=CAU'} />
                    {isOwner && <input className={styles.inputImage} type='file' onChange={onMainPhotoSelected}/>}                    
                </label>
                <div className={styles.contacts}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return (
        <>
            <div className={styles.hInfo}>
                <h1>{profile.fullName}</h1>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <p>
                    <strong>Loooking for a job: </strong>{profile.lookingForAJob ? 'yes' : 'no'}
                </p>
                <p>
                    <strong>My professional skills: </strong>{profile.lookingForAJobDescription}
                </p>
                <p>
                    <strong>About me: </strong>{profile.aboutMe}
                </p>
            </div>
            {isOwner && <button className={styles.editButton} onClick={goToEditMode}>Edit</button>}
    </>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return contactValue && <div className={styles.contact}><a href={contactValue} ><img src={require(`../../../assets/images/${contactTitle}.png`)} /></a></div>
}

export default ProfileDescription;