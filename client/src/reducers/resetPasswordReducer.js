import * as types from '../actions/actionTypes';

const initialState = {
  emailSent: false,
  link: [],
  resetPassword: false
};

/**
 * Handles reset passsword reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 *
 * @returns {object} current state
 */
export default function resetPasswordReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FORGOT_PASSWORD_LINK_SUCCESS:
      return {
        emailSent: true,
        link: action.link
      };
    case types.PASSWORD_RESET_SUCCESS:
      return {
        resetPassword: true
      };
    default:
      return state;
  }
}
