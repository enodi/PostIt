import axios from 'axios';
import toastr from 'toastr';
import * as types from './actionTypes';

/**
 *
 *
 * @export
 * @param {any} link
 * @returns
 */
export function passwordResetLinkSuccess(link) {
  return {
    type: types.PASSWORD_RESET_LINK_SENT,
    link
  };
}

/**
 *
 *
 * @export
 * @param {any} userEmail
 * @returns
 */
export function passwordResetLink(userEmail) {
  return (dispatch) => {
    return axios.post('/api/v1/user/passwordResetLink', userEmail)
      .then((res) => {
        dispatch(passwordResetLinkSuccess(res.data));
        return toastr.success(res.data);
      })
      .catch((error) => {
        return toastr.error(error.response.data);
      });
  };
}
