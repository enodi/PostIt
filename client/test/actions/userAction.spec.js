import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import * as types from '../../src/actions/actionTypes';
import { addUser, addUserSuccess } from '../../src/actions/userAction';

const mockStore = configureMockStore([thunk]);

describe('User Action', () => {
  it('should add users to groups', () => {
    const action = addUserSuccess({ username: 'enodi' });
    expect(action).toEqual({
      type: 'ADD_USERS_TO_GROUP',
      user: {
        username: 'enodi'
      }
    });
  });

  it('handles addUser action', () => {
    axios.post = jest.fn(() => Promise.resolve({
      data: {}
    }));

    const expectedActions = [
      {
        type: types.ADD_USERS_TO_GROUP,
        user: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(addUser(1, 1))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

