import axios from 'axios';
import * as types from './actionTypes';

export function retrieveUsersSuccess(users) {
  return {
    type: types.RETRIEVE_USERS_SUCCESSFUL,
    users
  };
}

export function retrieveUsers(username) {
  return dispatch =>
    axios.get(`/api/user/search?q=${username}`)
      .then((res) => {
        console.log(res);
        dispatch(retrieveUsersSuccess(res.data));
      })
      .catch((error) => {
        return error.response.data;
      });
}
