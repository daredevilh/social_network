import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;