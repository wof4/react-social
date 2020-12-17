import { combineReducers, createStore, applyMiddleware, Action } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

// типизация для state
type reducersType = typeof reducers
export type appStateType = ReturnType<reducersType>

// типизация для action creators
type propertiesTypes<T> = T extends {[key : string] : infer U} ? U : never;
export type InferActionsTypes<T extends {[key : string] : (...args:any[]) => any} > = ReturnType<propertiesTypes<T>>

// типизация для thunc creators
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>


const store = createStore(reducers, applyMiddleware(thunkMiddleware));


//@ts-ignore
window.store = store;

export default store;
