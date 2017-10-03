import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import * as types from '../actionTypes';

function setCurrentUser(user) {
  return {
    type: types.SIGNUP_SUCCESSFUL,
    user
  }
}

export function signupAction(userData) {
  return (dispatch) => {
    return axios.post('/api/user/signup', userData)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwt', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
  };
}
