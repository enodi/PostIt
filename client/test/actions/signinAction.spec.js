import thunk from 'redux-thunk';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import configureMockStore from 'redux-mock-store';
import * as types from '../../src/actions/actionTypes';
import { signinAction,
  signoutSuccess, signinSuccess } from '../../src/actions/auth/signinAction';

jest.mock('react-router');
jwtDecode.mockImplementation(() => ({}));
const mockStore = configureMockStore([thunk]);

describe('Signin Action', () => {
  it('handles user signin', () => {
    const action = signinSuccess({ username: 'enodi', password: 'password' });
    expect(action).toEqual({
      type: 'SIGN_IN_SUCCESS',
      user: {
        username: 'enodi',
        password: 'password'
      }
    });
  });

  it('handles user signout', () => {
    const action = signoutSuccess();
    expect(action).toEqual({
      type: 'SIGN_OUT_SUCCESSFUL'
    });
  });

  it('handles signinAction', () => {
    axios.post = jest.fn(() => Promise.resolve({
      data: { token: 'token' }
    }));

    const expectedActions = [
      {
        type: types.SIGN_IN_SUCCESS,
        user: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(signinAction({ username: 'enodi', password: 'password' }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles signoutUser', () => {
    const expectedActions = [
      {
        type: types.SIGN_OUT_SUCCESSFUL,
      }
    ];
    const store = mockStore();
    store.dispatch(signoutSuccess());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

