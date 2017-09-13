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

function signedUp(signedUp) {
  return {
    type: types.SIGNED_UP,
    signedUp
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
      dispatch(signedUp(true));
    })
    .catch((error) => {
      return error.response.data;
    });
  };
}

export function removeSignUpMessage() {
  return (dispatch) => {
    dispatch({ type: types.REMOVE_SIGN_UP_MESSAGE });
  }
}
