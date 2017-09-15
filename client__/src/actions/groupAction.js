import axios from 'axios';
// import jwtDecode from 'jwt-decode';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
import * as types from './actionTypes';

export function groupSuccess(group) {
  return {
    type: types.CREATE_GROUP_SUCCESSFUL,
    group
  };
}

export function groupAction(data) {
  return (dispatch) => {
    return axios.post('/api/group', data)
    .then((res) => {
      dispatch(groupSuccess());
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
  };
}
