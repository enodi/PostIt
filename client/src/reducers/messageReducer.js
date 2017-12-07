import * as types from '../actions/actionTypes';

const messageInitialState = {
  Message: {},
  groupMessages: {}
};

/**
 * @export messageReducer
 *
 * @param {any} [state=messageInitialState]
 * @param {any} [action={}]
 *
 * @returns {Object} current state
 */
export default function messageReducer(state = messageInitialState, action = {}) {
  switch (action.type) {
    case types.POST_MESSAGE_SUCCESSFUL:
      return { ...state, ...{ Message: action.message } };
    case types.RETRIEVE_MESSAGE_SUCCESSFUL:
      return { ...state, ...{ groupMessages: action.messages } };
    default:
      return state;
  }
}
