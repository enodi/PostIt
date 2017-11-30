import axios from 'axios';
import toastr from 'toastr';

import * as types from './actionTypes';
import { getMessages } from './messageAction';
import { fetchUsers } from './userAction';

/**
 *
 * @export retrieveGroupsSuccess
 *
 * @param {object} groups
 *
 * @returns {Object} action type
 */
export function retrieveGroupsSuccess(groups) {
  return {
    type: types.RETRIEVE_GROUP_SUCCESSFUL,
    groups
  };
}

/**
 * Async action that handles retrieving groups
 *
 * @export retrieveGroups
 *
 * @param {number} userId
 *
 * @returns {function} dispatch
 */
export function retrieveGroups(userId) {
  return dispatch =>
    axios.get(`/api/v1/user/${userId}/group`)
      .then((response) => {
        dispatch(retrieveGroupsSuccess(response.data.groups.Groups));
      })
      .catch(error => error.response.data);
}


/**
 * Async action that handles creating a group
 *
 * @export groupAction
 *
 * @param {object} data
 * @param {number} userId
 *
 * @returns {function} dispatch
 */
export function createGroup(data, userId) {
  return dispatch =>
    axios.post('/api/v1/group', data)
      .then((response) => {
        dispatch(retrieveGroups(userId));
        toastr.success(response.data.message);
        $('#modal1').modal('close');
      })
      .catch((error) => {
        if (error.response) {
          return toastr.error(error.response.data);
        }
      });
}

/**
 * @export activeGroupSuccess
 *
 * @param {object} active
 *
 * @returns {object} action type
 */
export function activeGroupSuccess(active) {
  return {
    type: types.ACTIVE_GROUP_CLICKED,
    active
  };
}

/**
 * @export activeGroup
 *
 * @param {object} active
 *
 * @returns {function} dispatch
 */
export function activeGroup(active) {
  return (dispatch) => {
    dispatch(getMessages(active.id));
    dispatch(fetchUsers(active.id));
    dispatch(activeGroupSuccess(active));
  };
}

