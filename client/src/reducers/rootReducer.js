import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import session from './sessionReducer';

const rootReducer = combineReducers({
  flashMessages,
  session
});

export default rootReducer;
