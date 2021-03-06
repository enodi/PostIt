import * as types from '../actions/actionTypes';

const groupInitialState = {
  Groups: [],
  activeGroup: {}
};
/**
 * @export groupReducer
 *
 * @param {any} [state=groupInitialState]
 * @param {any} [action={}]
 *
 * @returns {Object} current state
 */
export default function groupReducer(state = groupInitialState, action = {}) {
  switch (action.type) {
    case types.RETRIEVE_GROUP_SUCCESSFUL:
      return { ...state, ...{ Groups: action.groups } };

    case types.ACTIVE_GROUP_CLICKED:
      return { ...state, ...{ activeGroup: action.active } };

    default:
      return state;
  }
}
