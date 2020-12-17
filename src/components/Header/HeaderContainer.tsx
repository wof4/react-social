import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData, logout } from '../../redux/authReducer';
import { appStateType } from '../../redux/reduxStore';

type propsType = { 
  isAuth: boolean 
  login: string | null
  logout: () => void
}

class HeaderContainer extends React.PureComponent<propsType> {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: appStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,

});

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
