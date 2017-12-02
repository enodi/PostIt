import axios from 'axios';
import toastr from 'toastr';

import * as types from './actionTypes';

/**
 * @param {object} users
 *
 * @returns {object} action type
 */
export function fetchUsersSuccess(users) {
  return {
    type: types.FETCH_USERS_IN_GROUP,
    users
  };
}

/**
 * Async action that handles fetching users in a group
 *
 * @param {number} groupId
 *
 * @returns {function} dispatch
 */
export function fetchUsers(groupId) {
  return dispatch =>
    axios.get(`/api/v1/group/${groupId}/users`)
    .then((response) => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch((error) => {
      if (error.response) {
        return toastr.error(error.response.data.error);
      }
    });
}

/**
 * @param {object} user
 *
 * @returns {object} action type
 */
export function addUserSuccess(user) {
  return {
    type: types.ADD_USERS_TO_GROUP,
    user
  };
}

/**
 * Async action that handles adding users to a group
 *
 * @param {number} groupId
 * @param {number} userId
 *
 * @returns {function} dispatch
 */
export function addUser(groupId, userId) {
  return dispatch =>
  axios.post(`/api/v1/group/${groupId}/user`, userId)
    .then((response) => {
      dispatch(fetchUsers(groupId));
      toastr.success(response.data.message);
      $('#modal1').modal('close');
    })
    .catch((error) => {
      if (error.response) {
        return toastr.error(error.response.data.message);
      }
    });
}

