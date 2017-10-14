import * as types from '../actions/actionTypes';
import { messageInitialState } from './initialState';


/**
 *
 * @export messageReducer
 * @param {any} [state=messageInitialState]
 * @param {any} [action={}]
 * @returns {Object} object
 */
export default function messageReducer(state = messageInitialState, action = {}) {
  switch (action.type) {
    case types.POST_MESSAGE_SUCCESSFUL:
      return { ...state, ...{ newMessage: action.message } };
    case types.RETRIEVE_MESSAGE_SUCCESSFUL:
      return { ...state, ...{ groupMessages: action.messages } };
    default:
      return state;
  }
}
