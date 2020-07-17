import { loginApi, userApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {

  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,

};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captcha: action.captcha,
      };
    default: {
      return state;
    }
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    id,
    email,
    login,
    isAuth,
  },
});

export const addCapthaFromState = (captcha) => ({
  type: SET_CAPTCHA_URL,
  captcha,
});

export const getAuthUserData = () => (dispatch) => loginApi.getLoginStatus()
  .then((response) => {
    if (response.data.resultCode === 0) {
      const {
        id, email, login,
      } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });

export const getCaptchaUrl = () => (dispatch) => {
  userApi.getCaptcha()
    .then((response) => {
      dispatch(addCapthaFromState(response.data.url));
    });
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  userApi.login(email, password, rememberMe, captcha)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
    });
};

export const logout = () => (dispatch) => {
  userApi.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
};

export default authReducer;
