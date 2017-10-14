import axios from 'axios';
import toastr from 'toastr';
import * as types from './actionTypes';

/**
 *
 * @export messageSuccess
 * @param {any} message
 * @returns {Object} action type
 */
export function messageSuccess(message) {
  return {
    type: types.POST_MESSAGE_SUCCESSFUL,
    message
  };
}

/**
 *
 * @export messageAction
 * @param {any} groupId
 * @param {any} data
 * @returns {Object} Promise
 */
export function messageAction(groupId, data) {
  return (dispatch) => {
    axios.post(`api/v1/group/${groupId}/message`, data)
      .then((res) => {
        dispatch(messageSuccess(res.data));
        toastr.success(res.data.message);
      })
      .catch(error => error.response.data);
  };
}

/**
 *
 * @export getMessageSuccess
 * @param {any} messages
 * @returns {Object} action type
 */
export function getMessageSuccess(messages) {
  return {
    type: types.RETRIEVE_MESSAGE_SUCCESSFUL,
    messages
  };
}

/**
 *
 * @export getMessages
 * @param {any} groupId
 * @returns {Object} Promise
 */
export function getMessages(groupId) {
  return (dispatch) => {
    axios.get(`api/v1/group/${groupId}/messages`)
      .then((res) => {
        dispatch(getMessageSuccess(res.data));
      })
      .catch(error => error.response.data);
  };
}
