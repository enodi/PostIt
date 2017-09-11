import { combineReducers } from 'redux';
import session from './authReducer';

const rootReducer = combineReducers({
  session
});

export default rootReducer;
