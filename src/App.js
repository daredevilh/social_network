import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile/>} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/feed' component={Feed} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/users' render={() => <UsersContainer /> } />
      </div>
    </div>
    
  );
}


 


export default App;
