import { userApi } from './../api/usersApi';
import { usersType } from './../type/type';
import { BaseThunkType, InferActionsTypes } from './reduxStore';
import { following } from '../api/followApi';


const initialState = {
  users: [] as Array<usersType>,
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFething: false,
  followedProgress: [] as Array<number>,
};



const usersReducer = (state = initialState, action: actionsTypes): initialStateType => {
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


export const actions = {
followSuccess :(userId: number)=> ({ type: 'FOLLOW', userId } as const),
unfollowSuccess : (userId: number) => ({ type: 'UNFOLLOW', userId }as const), 
setUsers : (users: Array<usersType>) => ({ type: 'SET_USERS', users }as const), 
setPage : (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage }as const), 
setUserCounter : (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount }as const), 
toggleFetching : (isFething: boolean) => ({ type: 'TOGGLE_FETCHING', isFething }as const), 
followedInProgress : (followStstus: boolean, userId: number) => ({ type: 'FOLLOW_IN_PROGRESS', followStstus, userId }as const) 
}



export const getUsers = (currentPage: number, pageSize: number):thuncTypes => {
  return async (dispatch) => {
    dispatch(actions.toggleFetching(true));
    let data = await userApi.getUsers(currentPage, pageSize)
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setUserCounter(data.totalCount));
    dispatch(actions.toggleFetching(false));
  }
}

export const getPage = (pageNumber: number, pageSize: number):thuncTypes => {
  return async (dispatch) => {
    dispatch(actions.toggleFetching(true));
    dispatch(actions.setPage(pageNumber));
    const data = await userApi.getUsers(pageNumber, pageSize)
    dispatch(actions.setUsers(data.items));
    dispatch(actions.toggleFetching(false));

  }
};


export const follow = (userId: number):thuncTypes => {
  return async (dispatch) => {
    dispatch(actions.followedInProgress(true, userId));
    let data = await following.getFollowStatus(userId, 'post')
    if (data.resultCode === 0) {
      dispatch(actions.followSuccess(userId));
    }
    dispatch(actions.followedInProgress(false, userId));
  }
}

export const unfollow = (userId: number):thuncTypes => {
  return async (dispatch) => {
    dispatch(actions.followedInProgress(true, userId));
    const data = await following.getFollowStatus(userId, 'delete')
    if (data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.followedInProgress(false, userId));
  }
};

export default usersReducer;


export type initialStateType = typeof initialState
type actionsTypes = InferActionsTypes<typeof actions>
type thuncTypes = BaseThunkType<actionsTypes>