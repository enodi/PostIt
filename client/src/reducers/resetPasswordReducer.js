import * as types from '../actions/actionTypes';

const initialState = {
  emailSent: false,
  link: []
};

/**
 *
 *
 * @export
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
export default function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case types.PASSWORD_RESET_LINK_SENT:
      return {
        emailSent: true,
        link: action.link
      };
    default:
      return state;
  }
}
