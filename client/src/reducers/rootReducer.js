import { combineReducers } from 'redux';
import authReducer from './authReducer';
import groupReducer from './groupReducer';
import searchReducer from './searchReducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
  authReducer,
  groupReducer,
  searchReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_SUCCESSFUL') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
