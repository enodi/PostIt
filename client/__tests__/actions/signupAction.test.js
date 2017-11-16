import thunk from 'redux-thunk';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import configureMockStore from 'redux-mock-store';
import * as types from '../../src/actions/actionTypes';
import { signupAction, setCurrentUser } from '../../src/actions/auth/signupAction';

jest.mock('react-router');
jwtDecode.mockImplementation(() => ({}));
const mockStore = configureMockStore([thunk]);

describe('Signup Action', () => {
  it('handles user signup', () => {
    const action = setCurrentUser({
      username: 'enodi',
      fullname: 'Enodi Audu',
      email: 'enodiaudu5@gmail.com',
      password: 'password'
    });
    expect(action).toEqual({
      type: 'SIGNUP_SUCCESSFUL',
      user: {
        username: 'enodi',
        fullname: 'Enodi Audu',
        email: 'enodiaudu5@gmail.com',
        password: 'password'
      }
    });
  });

  it('handles signupAction', () => {
    axios.post = jest.fn(() => Promise.resolve({
      data: { token: 'token' }
    }));

    const expectedActions = [
      {
        type: types.SIGNUP_SUCCESSFUL,
        user: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(signupAction({
      username: 'enodi',
      fullname: 'Enodi Audu',
      email: 'enodiaudu5@gmail.com',
      password: 'password'
    }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

