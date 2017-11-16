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
<<<<<<< HEAD
 *
 * @param {number} groupId
 *
=======
 *
 * @param {number} groupId
 *
>>>>>>> chore/152155945/client-side-test
 * @returns {function} dispatch
 */
export function getMessages(groupId) {
  return dispatch =>
    axios.get(`api/v1/group/${groupId}/messages`)
      .then((res) => {
        dispatch(getMessageSuccess(res.data));
      })
<<<<<<< HEAD
      .catch(error =>  console.log(error));
  };
=======
      .catch(error => error.response.data);
>>>>>>> chore/152155945/client-side-test
}


/**
 * Async action that handles posting messages
<<<<<<< HEAD
 *
 * @param {number} groupId
 * @param {object} data
 *
=======
 *
 * @param {number} groupId
 * @param {object} data
 *
>>>>>>> chore/152155945/client-side-test
 * @returns {function} dispatch
 */
export function postMessage(groupId, data) {
  return dispatch =>
    axios.post(`api/v1/group/${groupId}/message`, data)
      .then(() => {
        dispatch(getMessages(groupId));
      })
      .catch(error => error.response.data);
}
