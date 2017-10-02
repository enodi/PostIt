import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import * as types from '../actionTypes';

export function signinSuccess(user) {
  return {
    type: types.LOG_IN_SUCCESS,
    user
  };
}

export function signinAction(credentials) {
  return (dispatch) => {
    return axios.post('/api/user/signin', credentials)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwt', token);
        // Dispatch loginSuccess action to the reducer

        setAuthorizationToken(token);
        dispatch(signinSuccess(jwtDecode(token)));
        return res;
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function signoutUser() {
  // Remove JWT from sessionStorage when user logs out
  localStorage.removeItem('jwt');
  return {
    type: types.LOG_OUT
  };
}

