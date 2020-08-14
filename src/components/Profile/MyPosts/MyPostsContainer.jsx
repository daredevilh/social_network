import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';



/*const MyPostsContainer = (props) => {
    let state = props.store.getState();
    


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />)
    
};*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);




export default MyPostsContainer;