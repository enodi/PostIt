import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function signupReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case types.SIGNED_UP:
      return {
        ...state,
        signedUp: action.signedUp
      };
    case types.REMOVE_SIGN_UP_MESSAGE:
      return {
        ...state,
        signedUp: false,
      };
    default:
      return state;
  }
}
