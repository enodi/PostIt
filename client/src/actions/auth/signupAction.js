import axios from 'axios';
import * as types from '../actionTypes';

export function signupAction(userData) {
  return (dispatch) => {
    return axios.post('/api/user/signup', userData)
    .then((res) => {
      localStorage.setItem('jwt', res.data.token);
      dispatch({
        type: types.SIGNUP_SUCCESSFUL
      });
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
  };
}
