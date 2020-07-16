import { userApi } from '../api/api';

const initialState = {
  posts: [
    { id: 1, message: 'Это мой первый пост', LikesCount: 12 },
    { id: 2, message: 'Это мой второй пост', LikesCount: 13 },
    { id: 3, message: 'Это мой третий пост', LikesCount: 2 },
    { id: 4, message: 'Это мой четвертый пост', LikesCount: 24 },
    { id: 5, message: 'Это мой пятый пост', LikesCount: 42 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      const newPost = {
        id: 5,
        message: action.newPostText,
        LikesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
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
          ...state.profile, photos: action.photos,
        },
      };

    default: {
      return state;
    }
  }
};
export const AddPost = (newPostText) => ({
  type: 'ADD-POST',
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile,
});
export const setUserStatus = (data) => ({
  type: 'SET_STATUS',
  data,
});

export const updateUserStatus = (status) => ({
  type: 'UPDATE_STATUS',
  status,
});

export const addPhotoAvatar = (photos) => ({
  type: 'ADD_PHOTO_AVATAR',
  photos,
});

export const getUserProfile = (userId) => (dispatch) => {
  userApi.getUser(userId)
    .then((data) => {
      dispatch(setUserProfile(data));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
  userApi.getUserStatus(userId)
    .then((data) => {
      dispatch(setUserStatus(data));
    });
};

export const updateMyStatus = (status) => (dispatch) => {
  userApi.updateStatus(status)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(updateUserStatus(status));
      }
    });
};

export const changePhoto = (foto) => (dispatch) => {
  userApi.onChangePhoto(foto)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(addPhotoAvatar(response.data.data.photos));
      }
    });
};

export const changeProfile = (profile, userId) => (dispatch) => {
  userApi.onChangeProfile(profile)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
      }
    });
};

export default profileReducer;
