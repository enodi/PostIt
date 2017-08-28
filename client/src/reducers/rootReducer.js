import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import flashMessages from './flashMessages';

export default combineReducers({
  form: formReducer,
  flashMessages
});
