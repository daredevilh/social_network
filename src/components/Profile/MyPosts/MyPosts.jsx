import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';


const MyPosts = (props) => {
    
    let posts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />);


    let onPostChange = (e) => {
        props.updateNewPostText(e.target.value);
    }

    let onAddPost = () => {
        props.addPost();
    }
    
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ></textarea>
                <button onClick={onAddPost}>Add post</button>   
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts;