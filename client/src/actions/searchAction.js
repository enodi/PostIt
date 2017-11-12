import axios from 'axios';
import * as types from './actionTypes';


/**
 * @param {object} users
 *
 * @returns {Object} action type
 */
export function searchUsersSuccess(users) {
  return {
    type: types.SEARCH_USERS_SUCCESSFUL,
    users
  };
}

/**
 * Async action that handles searching for users
 *
 * @param {object} username
 * @param {number} pageOffset
 * @param {number} pageLimit
 *
 * @returns {function} dispatch
 */
export function searchUsers(username, pageOffset, pageLimit) {
  const limit = pageLimit || 5;
  const offset = pageOffset || 0;
  return dispatch =>
    axios.get(`/api/v1/user/search?q=${username}&offset=${offset}&limit=${limit}`)
      .then((res) => {
        dispatch(searchUsersSuccess(res.data));
      })
      .catch(error => error.response.data);
}
