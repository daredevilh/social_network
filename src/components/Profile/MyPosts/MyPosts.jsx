import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';


const MyPosts = (props) => {
    
    let posts = props.state.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />);


    let onPostChange = (e) => {
        props.dispatch(updateNewPostTextActionCreator(e.target.value));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} value={props.state.newPostText} ></textarea>
                <button onClick={addPost}>Add post</button>   
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts;