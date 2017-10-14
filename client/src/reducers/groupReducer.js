import * as types from '../actions/actionTypes';
import { groupInitialState } from './initialState';


/**
 *
 * @export groupReducer
 * @param {any} [state=groupInitialState]
 * @param {any} [action={}]
 * @returns {Object} object
 */
export default function groupReducer(state = groupInitialState, action = {}) {
  switch (action.type) {
    case types.CREATE_GROUP_SUCCESSFUL:
      return { ...state, ...{ newGroup: action.group } };

    case types.RETRIEVE_GROUP_SUCCESSFUL:
      return { ...state, ...{ userGroups: action.groups } };

    case types.ACTIVE_GROUP_CLICKED:
      return { ...state, ...{ activeGroup: action.active } };

    default:
      return state;
  }
}
