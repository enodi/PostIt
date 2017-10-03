import axios from 'axios';
import * as types from './actionTypes';

export function messageSuccess(message) {
  return {
    type: types.POST_MESSAGE_SUCCESSFUL,
    message
  };
}

export function messageAction(groupId, data) {
  return (dispatch) => {
    axios.post(`api/group/${groupId}/message`, data)
      .then((res) => {
        dispatch(messageSuccess(res.data));
      })
      .catch((error) => {
        return error.response.data;
      });
  };
}
