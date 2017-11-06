import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import * as types from './actionTypes';


/**
 *
 * @export groupSuccess
 * @param {any} group
 * @returns {Object} action type
 */
export function groupSuccess(group) {
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
 * @export groupAction
 * @param {any} data
 * @returns {Object} Promise
 */
export function groupAction(data) {
  return (dispatch) => {
    return axios.post('/api/v1/group', data)
      .then((res) => {
        dispatch(groupSuccess(res.data));
        toastr.success(res.data.message);
        browserHistory.push('/dashboard');
      })
      .catch((error) => {
        return error.response.data;
      });
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
        dispatch(retrieveGroupsSuccess(res.data));
      })
      .catch((error) => {
        return error.response.data;
      });
}


/**
 *
 * @export activeGroup
 * @param {any} active
 * @returns {Object} action type
 */
export function activeGroup(active) {
  return {
    type: types.ACTIVE_GROUP_CLICKED,
    active
  };
}

