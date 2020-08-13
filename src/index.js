import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';



let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}; 

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
/*store.subscribe(() => {
  rerenderEntireTree(store.getState());
});*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
