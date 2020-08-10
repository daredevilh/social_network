import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375' alt='avatar'/>
            <p>{props.message}</p>
            <span>{props.likeCount}</span>
            <span className={classes.like}>❤️</span>                
        </div>
    )
}

export default Post;