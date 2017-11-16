import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import * as types from '../actionTypes';


/**
 *
 * @param {any} user
 * @returns {Object} object
 */
export function setCurrentUser(user) {
  return {
    type: types.SIGNUP_SUCCESSFUL,
    user
  };
}

/**
 *
 * @export
 * @param {any} userData
 * @returns {Object} Promise
 */
export function signupAction(userData) {
  return (dispatch) => {
    return axios.post('/api/v1/user/signup', userData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwt', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        toastr.success(res.data.message);
        browserHistory.push('/dashboard');
      })
      .catch(error => toastr.error(error.response.data.message));
  };
}
