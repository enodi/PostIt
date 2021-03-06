import * as types from '../actions/actionTypes';

const authInitialState = {
  isAuthenticated: false,
  user: {}
};

/**
 * @export authReducer
 *
 * @param {any} [state=authInitialState]
 * @param {any} [action={}]
 *
 * @returns {Object} current state
 */
export default function authReducer(state = authInitialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case types.SIGN_IN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user
      };
    default:
      return state;
  }
}
