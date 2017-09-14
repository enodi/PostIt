import { combineReducers } from 'redux';
// import signupReducer from './signupReducer';
// import signinReducer from './signinReducer'
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;
