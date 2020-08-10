import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let posts = props.state.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />);

    let newPostElement = React.createRef();


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} value={props.state.newPostText} ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>   
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
};


export default MyPosts;