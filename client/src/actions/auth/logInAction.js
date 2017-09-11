import axios from 'axios';
import * as types from '../actionTypes';

export function loginSuccess() {
  return {
    type: types.LOG_IN_SUCCESS
  };
}

export function logInUser(credentials) {
  return (dispatch) => {
    return axios.post('/api/user/signin', credentials)
    .then((res) => {
      console.log(res.data.token);
      // If we get a positive response,
      // Store jwt from response in session storage
      sessionStorage.setItem('jwt', res.data.token);
      // Dispatch loginSuccess action to the reducer
      dispatch(loginSuccess());
    })
  };
}

export function logOutUser() {
  // Remove JWT from sessionStorage when user logs out
  sessionStorage.removeItem('jwt');
  return {
    type: types.LOG_OUT
  };
}
