import React from 'react';
import './App.css';
import {Route, StaticRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/appReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom'
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/feed' component={Feed} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={() => <UsersContainer /> } />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
      
    );
  }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
  )(App)
