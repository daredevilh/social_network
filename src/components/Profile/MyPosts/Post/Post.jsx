import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375' alt='avatar'/>
            <div>    
                <p>{props.message}</p>
                <div>
                    <span>{props.likeCount}</span>
                    <span className={styles.like}>❤️</span>
                    <span className={styles.like}>📝</span>
                    <span className={styles.like}>💬</span>
                    <span className={styles.like}>📢</span>
                </div>                
            </div>
        </div>
    )
}

export default Post;