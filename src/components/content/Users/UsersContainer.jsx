import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow, unfollow, setUserCounter, followedInProgress, getUsers, getPage,
} from '../../../redux/usersReducer';
import {
  getUsersSelector,
  getPageSize,
  getTotalUserCount,
  getCurrentPage,
  getIsFething,
  getFollowedProgress,
} from '../../../redux/usersSelectors';

class UsersComponent extends PureComponent {
  componentDidMount() {
    const { getUsers: getUsersTc, currentPage, pageSize } = this.props;
    getUsersTc(currentPage, pageSize);
  }

    onChangePage = (pageNumber) => {
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

const mapStateToProps = (state) => ({
  users: getUsersSelector(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFething: getIsFething(state),
  followedProgress: getFollowedProgress(state),
});

export default connect(mapStateToProps, {
  follow, unfollow, setUserCounter, followedInProgress, getUsers, getPage,
})(UsersComponent);
