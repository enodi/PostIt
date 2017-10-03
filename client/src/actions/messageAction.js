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
      .catch(error => error.response.data);
  };
}

export function getMessageSuccess(messages) {
  return {
    type: types.RETRIEVE_MESSAGE_SUCCESSFUL,
    messages
  };
}

export function getMessages(groupId) {
  return (dispatch) => {
    axios.get(`api/group/${groupId}/messages`)
      .then((res) => {
        dispatch(getMessageSuccess(res.data));
      })
      .catch(error => error.response.data);
  };
}
