import { combineReducers } from 'redux';
import authReducer from './authReducer';
import groupReducer from './groupReducer';
import searchReducer from './searchReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import resetPasswordReducer from './resetPasswordReducer';

const appReducer = combineReducers({
  authReducer,
  groupReducer,
  searchReducer,
  messageReducer,
  resetPasswordReducer,
  userReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_SUCCESSFUL') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
