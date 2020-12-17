import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { appStateType } from '../redux/reduxStore';

const mapStateToPropsForRedirect = (state: appStateType) => ({
  isAuth: state.auth.isAuth,

});

type isAuthType = {
  isAuth: boolean
}
export const withAuthRedirect = (Component: React.ComponentType) => {
  class RedirectComponent extends PureComponent<isAuthType> {
    render() {
      const { isAuth: isAuthBoolean } = this.props;
      if (isAuthBoolean === false) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  const withRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return withRedirect;
};

export default withAuthRedirect;
