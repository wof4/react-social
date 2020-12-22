import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  actions, getUserProfile, getUserStatus, updateMyStatus, changePhoto, changeProfile,
} from '../../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { appStateType } from '../../../redux/reduxStore';
import { photosType, profileUserType } from '../../../type/type';




const setUserProfile = actions.setUserProfile
class ProfileContainer extends PureComponent<propsType> {
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

  componentDidUpdate(prevProps: propsType) {
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

const mapStateToProps = (state: appStateType) => ({

  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  id: state.auth.id,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile, getUserProfile, getUserStatus, updateMyStatus, changePhoto, changeProfile,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);


type paramsType = {
  params: {
    userId: number
  }
}

type propsType = {
  id: number
  match: paramsType
  getUserProfile: (userId:number) => void
  getUserStatus: (userId:number) => void
  profile: profileUserType
  status: string
  changePhoto: (photo: any) => void
  changeProfile: (formData: profileUserType, userId: number) => void
  updateMyStatus: (localStatus: string) => void
  photos: photosType
}
