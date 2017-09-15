import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case types.LOG_IN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user
      };
    default:
      return state;
  }
}
