import { usersApi, followig } from '../api/api';

const initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFething: false,
  followedProgress: [],

};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalUserCount: action.totalCount,
      };
    case 'TOGGLE_FETCHING':
      return {
        ...state,
        isFething: action.isFething,
      };
    case 'FOLLOW_IN_PROGRESS':
      return {
        ...state,
        followedProgress: action.followStstus
          ? [...state.followedProgress, action.userId]
          : state.followedProgress.filter((id) => id !== action.userId),
      };
    default: {
      return state;
    }
  }
};

export const followSuccess = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowSuccess = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const setPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setUserCounter = (totalCount) => ({ type: 'SET_TOTAL_COUNT', totalCount });
export const toggleFetching = (isFething) => ({ type: 'TOGGLE_FETCHING', isFething });
export const followedInProgress = (followStstus, userId) => ({ type: 'FOLLOW_IN_PROGRESS', followStstus, userId });

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true));

  usersApi.getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUserCounter(data.totalCount));
      dispatch(toggleFetching(false));
    });
};

export const getPage = (pageNumber, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true));
  dispatch(setPage(pageNumber));
  usersApi.getUsers(pageNumber, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(toggleFetching(false));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(followedInProgress(true, userId));
  followig.getFollowStatus(userId, 'post')
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(followedInProgress(false, userId));
    });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(followedInProgress(true, userId));
  followig.getFollowStatus(userId, 'delete')
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(followedInProgress(false, userId));
    });
};

export default usersReducer;
