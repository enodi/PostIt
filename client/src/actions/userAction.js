import axios from 'axios';
import toastr from 'toastr';
import * as types from './actionTypes';

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
  return dispatch => axios
    .post(`/api/v1/group/${groupId}/user`, userId)
    .then((res) => {
      dispatch(addUserSuccess(res.data));
      toastr.success(res.data.message);
      $('#modal1').modal('close');
    })
    .catch(error => toastr.error(error.response.data.message));
}
