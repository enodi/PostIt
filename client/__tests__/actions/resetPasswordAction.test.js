import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import * as types from '../../src/actions/actionTypes';
import { passwordResetLink, resetPassword,
  resetPasswordSuccess, passwordResetLinkSuccess } from '../../src/actions/resetPasswordAction';

const mockStore = configureMockStore([thunk]);
const token = 'YnHYSTchska_i0dFRnb';

describe('Reset Password Action', () => {
  it('handles passwordResetLinkSuccess', () => {
    const action = passwordResetLinkSuccess(['http://localhost:3200']);
    expect(action).toEqual({
      type: 'FORGOT_PASSWORD_LINK_SUCCESS',
      link: ['http://localhost:3200']
    });
  });

  it('handles resetPasswordSuccess', () => {
    const action = resetPasswordSuccess({ email: 'enodiaudu5@gmail.com' });
    expect(action).toEqual({
      type: 'PASSWORD_RESET_SUCCESS',
      user: {
        email: 'enodiaudu5@gmail.com'
      }
    });
  });

  it('handles passwordResetLink action', () => {
    axios.post = jest.fn(() => Promise.resolve({
      data: {}
    }));

    const expectedActions = [
      {
        type: types.FORGOT_PASSWORD_LINK_SUCCESS,
        link: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(passwordResetLink({ email: 'enodiaudu5@gmail.com' }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles resetPassword action', () => {
    axios.put = jest.fn(() => Promise.resolve({
      data: {}
    }));

    const expectedActions = [
      {
        type: types.PASSWORD_RESET_SUCCESS,
        user: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(resetPassword('password', token))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

