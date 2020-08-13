import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import dialogsReducer from './dialogsReducer';


let store = {
    
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first post!', likeCount: 15},
                {id: 2, message: 'Hi, how are you?', likeCount: 46}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vika'},
                {id: 2, name: 'Den'}
            ],
            messages: [
                {id: 1, message: 'Hi how are you?'},
                {id: 2, message: 'Fine, thanks.'}
            ],
            newMessageText: ''
        },

        sidebar: {

        }
    },

    _callSubscriber() {},

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }

};


export default store;