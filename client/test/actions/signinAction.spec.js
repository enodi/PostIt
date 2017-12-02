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
  it('should return appropriate action when user signs in', () => {
    const action = signinSuccess({ username: 'enodi', password: 'password' });
    expect(action).toEqual({
      type: 'SIGN_IN_SUCCESS',
      user: {
        username: 'enodi',
        password: 'password'
      }
    });
  });

  it('should return appropriate action when user signs out', () => {
    const action = signoutSuccess();
    expect(action).toEqual({
      type: 'SIGN_OUT_SUCCESSFUL'
    });
  });

  it('should dispatch appropriate action on successful signin', () => {
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
    return store.dispatch(signinAction(
      { username: 'enodi', password: 'password' }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch appropriate action on successful signout', () => {
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

