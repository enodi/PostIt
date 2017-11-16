import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import * as types from './actionTypes';

/**
 * @export passwordResetLinkSuccess
 *
 * @param {object} link
 *
 * @returns {object} action type
 */
export function passwordResetLinkSuccess(link) {
  return {
    type: types.FORGOT_PASSWORD_LINK_SUCCESS,
    link
  };
}

/**
 * Async action that handles sending an email
 * containing reset password link
 *
 * @param {object} userEmail
 *
 * @returns {function} dispatch
 */
export function passwordResetLink(userEmail) {
  return (dispatch) => {
    return axios
      .post('/api/v1/user/forgotPassword', userEmail)
      .then((res) => {
        dispatch(passwordResetLinkSuccess(res.data));
        return toastr.success(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          return toastr.error(error.response.data.message);
        }
      });
  };
}

/**
 * @param {object} password
 *
 * @returns {object} action type
 */
export function resetPasswordSuccess(user) {
  return {
    type: types.PASSWORD_RESET_SUCCESS,
    user
  };
}

/**
 * Aysnc action that handles resetting user
 * password
 *
 * @param {object} userPassword
 * @param {string} token
 *
 * @returns {function} dispatch
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
      .catch((error) => {
        if (error.response) {
          return toastr.error(error.response.data.message);
        }
      });
  };
}
