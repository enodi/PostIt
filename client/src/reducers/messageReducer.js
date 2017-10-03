import * as types from '../actions/actionTypes';
import { messageInitialState } from './initialState';

export default function messageReducer(state = messageInitialState, action = {}) {
  switch (action.type) {
    case types.POST_MESSAGE_SUCCESSFUL:
      return { ...state, ...{ newMessage: action.message } };
    default:
      return state;
  }
}
