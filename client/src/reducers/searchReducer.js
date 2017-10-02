import * as types from '../actions/actionTypes';
import { searchInitialState } from './initialState';

export default function searchReducer(state = searchInitialState, action = {}) {
  switch (action.type) {
    case types.RETRIEVE_USERS_SUCCESSFUL:
      return { ...state, ...{ search: action.users } };
    default:
      return state;
  }
}
