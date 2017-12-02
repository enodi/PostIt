import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

import setAuthorizationToken from '../../utils/setAuthorizationToken';
import * as types from '../actionTypes';


/**
 *
 * @param {object} user
 *
 * @returns {Object} object
 */
export function setCurrentUser(user) {
  return {
    type: types.SIGNUP_SUCCESSFUL,
    user
  };
}

/**
 * Async action that handles user registration
 *
 * @param {object} userData
 *
 * @returns {function} dispatch
 */
export function signupAction(userData) {
  return (dispatch) => {
    return axios.post('/api/v1/user/signup', userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('jwt', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        toastr.success(response.data.message);
        browserHistory.push('/dashboard');
      })
      .catch(error => toastr.error(error.response.data.message));
  };
}
