import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow, unfollow, getUsers, getPage,
} from '../../../redux/usersReducer';
import {
  getUsersSelector,
  getPageSize,
  getTotalUserCount,
  getCurrentPage,
  getIsFething,
  getFollowedProgress,
} from '../../../redux/usersSelectors';
import { appStateType } from '../../../redux/reduxStore';
import { usersType } from '../../../type/type';






type mapStateToPropsType ={
  currentPage: number
  pageSize: number
  totalUserCount: number
  followedProgress: Array<number>
  isFething: boolean
  users:Array<usersType>
}


type mapDispatchTopropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  getPage: (pageNumber: number, pageSize: number) => void
  unfollow: (id:number) => void
  follow:(id: number) => void
}
type OwnPropsType = {}

type propsType = mapStateToPropsType & mapDispatchTopropsType





class UsersComponent extends PureComponent<propsType> {
  componentDidMount() {
    const { getUsers: getUsersTc, currentPage, pageSize } = this.props;
    getUsersTc(currentPage, pageSize);
  }

    onChangePage = (pageNumber: number) => {
      const { getPage: getPageTC, pageSize } = this.props;
      getPageTC(pageNumber, pageSize);
    }

    render() {
      return (
        <Users
          {...this.props}
          onChangePage={this.onChangePage}
        />
      );
    }
}


const mapStateToProps = (state: appStateType): mapStateToPropsType => ({
  users: getUsersSelector(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFething: getIsFething(state),
  followedProgress: getFollowedProgress(state),
});

export default connect<mapStateToPropsType, mapDispatchTopropsType, OwnPropsType, appStateType>(mapStateToProps, {
  follow, unfollow, getUsers, getPage,
})(UsersComponent);
