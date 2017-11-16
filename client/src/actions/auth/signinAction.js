import axios from 'axios';
import toastr from 'toastr';
import jwtDecode from 'jwt-decode';
import { browserHistory } from 'react-router';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import * as types from '../actionTypes';

/**
 * @export signinSuccess
 * @param {Object} user
 * @returns {Object} action type
 */
export function signinSuccess(user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    user
  };
}


/**
 * @export signOutSuccess
 * @returns  {Object} action type
 */
export function signoutSuccess() {
  return {
    type: types.SIGN_OUT_SUCCESSFUL
  };
}


/**
 * @export signinAction
 * @param {any} credentials
 * @returns {Object} Promise
 */
export function signinAction(credentials) {
  return (dispatch) => {
    return axios.post('/api/v1/user/signin', credentials)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwt', token);
        setAuthorizationToken(token);
        dispatch(signinSuccess(jwtDecode(token)));
        browserHistory.push('/dashboard');
      })
      .catch((error) => {
        if (error.response) {
          return toastr.error(error.response.data.message);
        }
      });
  };
}

/**
 * @export signOutUser
 * @returns {Object} Promise
 */
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('jwt');
    dispatch(signoutSuccess());
    browserHistory.push('/account');
  };
}

