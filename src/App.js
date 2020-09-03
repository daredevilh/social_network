import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
import Preloader from './components/common/Preloader/Preloader';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className='appWrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='appWrapperContent'>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
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
