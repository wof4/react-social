import React, { PureComponent } from 'react';
import './App.css';
import {
  Route, withRouter, Redirect, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/content/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/content/Login/Login';
import { initianalizeApp } from './redux/appReducer';
import Loader from './components/Loader/loader';

const ProfileContainer = React.lazy(() => import('./components/content/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/content/Messages/MessagesContainer'));

class App extends PureComponent {
  componentDidMount() {
    const { initianalizeApp: initianalizeAppThunk } = this.props;
    initianalizeAppThunk();
  }

  render() {
    const { initianalized: initialization } = this.props;
    if (!initialization) {
      return <Loader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="wrapper__content">
          <Switch>
            <Route path="/messages" render={() => <React.Suspense fallback={<div>Загрузка...</div>}><MessagesContainer /></React.Suspense>} />
            <Route path="/profile/:userId?" render={() => <React.Suspense fallback={<div>Загрузка...</div>}><ProfileContainer /></React.Suspense>} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <Redirect to="/profile" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initianalized: state.app.initianalized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initianalizeApp }),
)(App);
