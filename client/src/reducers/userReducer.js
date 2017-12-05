import * as types from '../actions/actionTypes';

const initialState = {
  Users: {}
};

/**
 * Handles userReducer
 *
 * @param {object} state Initial State
 * @param {object} action Dispatched action
 *
 * @returns {object} current state
 */
export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_USERS_TO_GROUP:
      return { ...state, ...{ Users: action.user } };
    case types.FETCH_USERS_IN_GROUP:
      return { ...state, ...{ Users: action.users } };
    default:
      return state;
  }
}
