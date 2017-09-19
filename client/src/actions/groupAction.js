import axios from 'axios';
import * as types from './actionTypes';

export function groupSuccess(group) {
  return {
    type: types.CREATE_GROUP_SUCCESSFUL,
    group
  };
}

export function retrieveGroupsSuccess(groups) {
  return {
    type: types.RETRIEVE_GROUP_SUCCESSFUL,
    groups
  };
}

export function groupAction(data) {
  return (dispatch) => {
    return axios.post('/api/group', data)
      .then((res) => {
        dispatch(groupSuccess(res.data));
        return res;
      })
      .catch((error) => {
        return error.response.data;
      });
  };
}

export function retrieveGroups(userId) {
  return dispatch =>
    axios.get(`/api/user/${userId}/group`)
      .then((res) => {
        console.log('I was called');
        dispatch(retrieveGroupsSuccess(res.data));
      })
      .catch((error) => {
        return error.response.data;
      });
}

