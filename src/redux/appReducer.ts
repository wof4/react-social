import { getAuthUserData } from './authReducer';
import { InferActionsTypes } from './reduxStore';

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';



const initialState= {
  initianalized: false,
};



type initialStateType = typeof initialState
const appReducer = (state = initialState, action: InferActionsTypes<typeof actions> ):initialStateType => {
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


const actions = {initianalizedSuccsess : () => ({ type: INITIALIZED_SUCCSESS })};


export const initianalizeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initianalizedSuccsess());
  });
};

export default appReducer;
