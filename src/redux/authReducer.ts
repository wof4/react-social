
import { loginApi } from '../api/loginApi';
import { BaseThunkType, InferActionsTypes } from './reduxStore';







const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: null as string| null 
};

type initialStateType = typeof initialState
type actionsType = InferActionsTypes<typeof actions>
type thunkType = BaseThunkType<actionsType>


const authReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload, 
      };
    case 'SET_CAPTCHA_URL':
      return {
        ...state,
        captcha: action.captcha

      };
    default: {
      return state;
    }
  }
};




export const actions = {
  setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({ type: 'SET_USER_DATA', payload: { id, email, login, isAuth }}as const),
  addCapthaFromState: (captcha: string) => ({ type: 'SET_CAPTCHA_URL', captcha }as const),
}




export const getAuthUserData = ():thunkType => (dispatch) => loginApi.getLoginStatus()
  .then((response: any) => {
    if (response.data.resultCode === 0) {
      const {
        id, email, login,
      } = response.data.data;
      dispatch(actions.setUserData(id, email, login, true));
    }
  });


export const getCaptchaUrl = (): thunkType => (dispatch) => 
loginApi.getCaptcha()
    .then((response: any) => {
      dispatch(actions.addCapthaFromState(response.data.url));
    });




export const login = (email: string, password: string, rememberMe: boolean, captcha: string): thunkType => (dispatch) => 
  loginApi.login(email, password, rememberMe, captcha)
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
    });


export const logout = (): thunkType => (dispatch) => 
  loginApi.logout()
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(actions.setUserData(null, null, null, false));
      }
    });


export default authReducer;
