import axios from 'axios';
import * as types from './actionTypes';


/**
 *
 * @export retrieveUsersSuccess
 * @param {any} users
 * @returns {Object} action type
 */
export function retrieveUsersSuccess(users) {
  return {
    type: types.RETRIEVE_USERS_SUCCESSFUL,
    users
  };
}

/**
 *
 * @export retrieveUsers
 * @param {any} username
 * @returns {Object} Promise
 */
export function retrieveUsers(username) {
  return dispatch =>
    axios.get(`/api/v1/user/search?q=${username}`)
      .then((res) => {
        dispatch(retrieveUsersSuccess(res.data));
      })
      .catch((error) => {
        return error.response.data;
      });
}
