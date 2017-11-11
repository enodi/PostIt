import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
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
    type: types.FORGOT_PASSWORD_LINK_SUCCESS,
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
    return axios
      .post('/api/v1/user/forgotPassword', userEmail)
      .then((res) => {
        dispatch(passwordResetLinkSuccess(res.data));
        return toastr.success(res.data.message);
      })
      .catch(error => toastr.error(error.response.data.message));
  };
}

/**
 *
 *
 * @export
 * @param {any} password
 * @returns
 */
export function resetPasswordSuccess(user) {
  return {
    type: types.PASSWORD_RESET_SUCCESS,
    user
  };
}

/**
 *
 *
 * @export
 * @param {any} userPassword
 * @returns
 */
export function resetPassword(userPassword, token) {
  return (dispatch) => {
    return axios
      .put(`/api/v1/user/resetPassword${token}`, userPassword)
      .then((res) => {
        dispatch(resetPasswordSuccess(res.data));
        toastr.success(res.data.message);
        browserHistory.push('/account');
      })
      .catch(error => toastr.error(error.response.data.message));
  };
}
