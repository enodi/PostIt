import { browserHistory } from 'react-router';
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESSFUL:
      browserHistory.push('/');
      break;
    default:
      return state;
  }
};

export default signupReducer;
