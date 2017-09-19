import { combineReducers } from 'redux';
// import signupReducer from './signupReducer';
// import signinReducer from './signinReducer'
import authReducer from './authReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  authReducer,
  groupReducer
});

export default rootReducer;
