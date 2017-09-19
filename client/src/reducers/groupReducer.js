import * as types from '../actions/actionTypes';
import { groupInitialState } from './initialState';

export default function groupReducer(state = groupInitialState, action = {}) {
  switch (action.type) {
    case types.CREATE_GROUP_SUCCESSFUL:
      return { ...state, ...{ newGroup: action.group } };

    case types.RETRIEVE_GROUP_SUCCESSFUL:
      return { ...state, ...{ userGroups: action.groups } };

    default:
      return state;
  }
}
