import { SIGNUP_SUCCESSFUL, SIGNED_UP, REMOVE_SIGN_UP_MESSAGE } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function currentUser(state = initialState, action = {}) {
  switch (action.type) {
    case SIGNUP_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case SIGNED_UP:
      return {
        ...state,
        signedUp: action.signedUp
      };
    case REMOVE_SIGN_UP_MESSAGE:
      return {
        ...state,
        signedUp: null,
      };
    default:
      return state;
  }
}
