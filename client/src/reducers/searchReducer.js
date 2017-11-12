import * as types from '../actions/actionTypes';

const searchInitialState = {
  search: []
};

/**
 *
 * @export
 * @param {any} [state=searchInitialState]
 * @param {any} [action={}]
 * @returns {Object} object
 */
export default function searchReducer(state = searchInitialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_USERS_SUCCESSFUL:
      return { ...state, ...{ search: action.users } };
    default:
      return state;
  }
}
