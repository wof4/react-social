

import { userApi } from '../api/usersApi';
import { profileApi } from '../api/profileApi';
import {  postsType, profileUserType } from '../type/type';
import { BaseThunkType, InferActionsTypes } from './reduxStore';

const initialState = {
  posts: [
    { id: 1, message: 'Это мой первый пост', LikesCount: 12 },
    { id: 2, message: 'Это мой второй пост', LikesCount: 13 },
    { id: 3, message: 'Это мой третий пост', LikesCount: 2 },
    { id: 4, message: 'Это мой четвертый пост', LikesCount: 24 },
    { id: 5, message: 'Это мой пятый пост', LikesCount: 42 },
  ] as Array<postsType>,
  profile: null as profileUserType | null,
  status: '',
};


const profileReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = {
        id: 5,
        message: action.newPostText,
        LikesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts ],
      };
    }

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };

    case 'SET_STATUS':
      return {
        ...state,
        status: action.data,
      };
    case 'UPDATE_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'ADD_PHOTO_AVATAR':
      return {
        ...state,
        profile: {
          ...state.profile, photos: action.large,
        } as profileUserType,
      };

    default: {
      return state;
    }
  }
};


export const actions = {
  AddPost : (newPostText:string ) => ({ type: 'ADD_POST', newPostText}as const),
  setUserProfile : (profile: profileUserType) => ({type: 'SET_USER_PROFILE', profile}as const),
  setUserStatus : (data: string) => ({ type: 'SET_STATUS', data}as const),
  updateUserStatus : (status: string ) => ({type: 'UPDATE_STATUS',  status}as const),
  addPhotoAvatar : (large: any) => ({type: 'ADD_PHOTO_AVATAR',  large}as const)
}








export const getUserProfile = (userId: number):thunkType => (dispatch) => {
  return userApi.getUser(userId)
    .then((data) => {
      dispatch(actions.setUserProfile(data));
    });
}

export const getUserStatus = (userId: number):thunkType => (dispatch) => {
  return userApi.getUserStatus(userId)
    .then((data) => {
      dispatch(actions.setUserStatus(data));
      
    });
}

export const updateMyStatus = (status: string):thunkType => (dispatch) => {
  return profileApi.updateStatus(status)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(actions.updateUserStatus(status));
      }
    });
}
export const changePhoto = (foto:any ):thunkType => (dispatch) => {
return  profileApi.onChangePhoto(foto)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(actions.addPhotoAvatar(response.data.data.large));
      }
    });
}

export const changeProfile = (profile: profileUserType, userId: number):thunkType => (dispatch) =>{
 return profileApi.onChangeProfile(profile)
 
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
      }
    });
}

export default profileReducer;


export type initialStateType = typeof initialState
type actionsType = InferActionsTypes<typeof actions>
type thunkType = BaseThunkType<actionsType>