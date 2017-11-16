import axios from 'axios';
import toastr from 'toastr';
import * as types from './actionTypes';

/**
 *
 *
 * @export
 * @param {any} user
 * @returns
 */
export function addUserSuccess(user) {
  return {
    type: types.ADD_USERS_TO_GROUP,
    user
  };
}

/**
 *
 *
 * @export
 * @param {any} groupId
 * @param {any} userId
 * @returns
 */
export function addUser(groupId, userId) {
  return dispatch =>
  axios.post(`/api/v1/group/${groupId}/user`, userId)
    .then((res) => {
      dispatch(addUserSuccess(res.data));
      toastr.success(res.data.message);
      $('#modal1').modal('close');
    })
    .catch((error) => {
      if (error.response) {
        return toastr.error(error.response.data.message);
      }
    });
}
