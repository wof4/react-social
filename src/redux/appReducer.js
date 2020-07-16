import { getAuthUserData } from './authReducer';

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';

const initialState = {
  initianalized: false,

};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCSESS:
      return {
        ...state,
        initianalized: true,
      };
    default: {
      return state;
    }
  }
};

export const initianalizedSuccsess = () => ({ type: INITIALIZED_SUCCSESS });

export const initianalizeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initianalizedSuccsess());
  });
};

export default appReducer;
