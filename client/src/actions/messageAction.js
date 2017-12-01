import axios from 'axios';

import * as types from './actionTypes';

/**
 *
 * @export messageSuccess
 *
 * @param {object} message
 *
 * @returns {Object} action type
 */
export function messageSuccess(message) {
  return {
    type: types.POST_MESSAGE_SUCCESSFUL,
    message
  };
}

/**
 * @export getMessageSuccess
 *
 * @param {object} messages
 *
 * @returns {object} action type
 */
export function getMessageSuccess(messages) {
  return {
    type: types.RETRIEVE_MESSAGE_SUCCESSFUL,
    messages
  };
}

/**
 * Async action that handles retrieving messages
 *
 * @param {number} groupId
 *
 * @returns {function} dispatch
 */
export function getMessages(groupId) {
  return dispatch =>
    axios.get(`api/v1/group/${groupId}/messages`)
      .then((response) => {
        dispatch(getMessageSuccess(response.data));
      })
      .catch(error => error.response.data);
}


/**
 * Async action that handles posting messages
 *
 * @param {number} groupId
 * @param {object} data
 *
 * @returns {function} dispatch
 */
export function postMessage(groupId, data) {
  return dispatch =>
    axios.post(`api/v1/group/${groupId}/message`, data)
      .then(() => {
        dispatch(getMessages(groupId));
      })
      .catch(error => error.response);
}
