import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function signinReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user
      };
    default:
      return state;
  }
}
