import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostReduxForm from './PostForm/PostForm';


const MyPosts = (props) => {
    
    let posts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id} />);
    
    let onSubmit = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={onSubmit} updateNewPostText={props.updateNewPostText} />
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts;