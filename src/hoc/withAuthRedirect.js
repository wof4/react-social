import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,

});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends PureComponent {
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
