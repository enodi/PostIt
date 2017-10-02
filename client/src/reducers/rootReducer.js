import { combineReducers } from 'redux';
// import signupReducer from './signupReducer';
// import signinReducer from './signinReducer'
import authReducer from './authReducer';
import groupReducer from './groupReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  authReducer,
  groupReducer,
  searchReducer
});

export default rootReducer;
