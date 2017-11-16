import axios from 'axios';
import toastr from 'toastr';
import * as types from './actionTypes';
import { getMessages } from './messageAction';


/**
 *
 * @export groupSuccess
 * @param {any} group
 * @returns {Object} action type
 */
export function createGroupSuccess(group) {
  return {
    type: types.CREATE_GROUP_SUCCESSFUL,
    group
  };
}


/**
 *
 * @export retrieveGroupsSuccess
 * @param {any} groups
 * @returns {Object} action type
 */
export function retrieveGroupsSuccess(groups) {
  return {
    type: types.RETRIEVE_GROUP_SUCCESSFUL,
    groups
  };
}

/**
 *
 * @export retrieveGroups
 * @param {any} userId
 * @returns {Object} Promise
 */
export function retrieveGroups(userId) {
  return dispatch =>
    axios.get(`/api/v1/user/${userId}/group`)
      .then((res) => {
        dispatch(retrieveGroupsSuccess(res.data.groups.Groups));
      })
      .catch(error => error.response.data);
}


/**
 *
 * @export groupAction
 * @param {any} data
 * @returns {Object} Promise
 */
export function createGroup(data, userId) {
  return (dispatch) => {
    return axios.post('/api/v1/group', data)
      .then((res) => {
        dispatch(retrieveGroups(userId));
        toastr.success(res.data.message);
        $('#modal1').modal('close');
      })
      .catch((error) => {
        if (error.response) {
          return toastr.error(error.response.data);
        }
      });
  };
}

/**
 *
 *
 * @export
 * @param {any} active
 * @returns
 */
export function activeGroupSuccess(active) {
  return {
    type: types.ACTIVE_GROUP_CLICKED,
    active
  };
}

/**
 *
 * @export activeGroup
 * @param {any} active
 * @returns {Object} action type
 */
export function activeGroup(active) {
  return (dispatch) => {
    dispatch(getMessages(active.id));
    dispatch(activeGroupSuccess(active));
  };
}

