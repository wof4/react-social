import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  setUserProfile, getUserProfile, getUserStatus, updateMyStatus, changePhoto, changeProfile,
} from '../../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class ProfileContainer extends PureComponent {
  componentDidMount() {
    const {
      id,
      match: { params },
      getUserProfile: getUserProfileTC,
      getUserStatus: getUserStatusTC,
    } = this.props;
    let { userId } = params;
    if (!userId) {
      userId = id;
    }
    getUserProfileTC(userId);
    getUserStatusTC(userId);
  }

  componentDidUpdate(prevProps) {
    const {
      id,
      match: { params },
      getUserProfile: getUserProfileTC,
      getUserStatus: getUserStatusTC,
    } = this.props;
    let { userId } = params;
    if (params.userId !== prevProps.match.params.userId) {
      if (!userId) {
        userId = id;
      }
      getUserProfileTC(userId);
      getUserStatusTC(userId);
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  id: state.auth.id,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile, getUserProfile, getUserStatus, updateMyStatus, changePhoto, changeProfile,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
