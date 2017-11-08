import axios from 'axios';
import * as types from './actionTypes';


/**
 *
 * @export retrieveUsersSuccess
 * @param {any} users
 * @returns {Object} action type
 */
export function searchUsersSuccess(users) {
  return {
    type: types.SEARCH_USERS_SUCCESSFUL,
    users
  };
}

/**
 *
 * @export retrieveUsers
 * @param {any} username
 * @returns {Object} Promise
 */
export function searchUsers(username) {
  return dispatch =>
    axios.get(`/api/v1/user/search?q=${username}`)
      .then((res) => {
        dispatch(searchUsersSuccess(res.data));
      })
      .catch(error => error.response.data);
}
