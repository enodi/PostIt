import * as types from '../actions/actionTypes';

export default function groupReducer(state = [], action = {}) {
  switch (action.type) {
    case types.CREATE_GROUP_SUCCESSFUL:
      return [
        ...state,
        Object.assign({}, action.group)
      ];
    default:
      return state;
  }
}
