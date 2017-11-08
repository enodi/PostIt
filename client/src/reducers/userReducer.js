import * as types from '../actions/actionTypes';

const initialState = {
  Users: []
};

/**
 *
 *
 * @export
 * @param {any} [state=initialState]
 * @param {any} [action={}]
 * @returns
 */
export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_USERS_TO_GROUP:
      return { ...state, ...{ Users: action.user } };
    default:
      return state;
  }
}
