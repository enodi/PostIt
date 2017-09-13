import { combineReducers } from 'redux';
import currentUser from './signupReducer';

const rootReducer = combineReducers({
  currentUser
});

export default rootReducer;
