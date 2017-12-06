import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

import * as types from '../../src/actions/actionTypes';
import { addUser, addUserSuccess } from '../../src/actions/userAction';

const mockStore = configureMockStore([thunk]);

describe('User Action', () => {
  it('should dispatch addUserSuccess action when user adds a new user', () => {
    const action = addUserSuccess({ username: 'agnes' });
    expect(action).toEqual({
      type: 'ADD_USERS_TO_GROUP',
      user: {
        username: 'agnes'
      }
    });
  });

  it('should dispatch appropriate action when user successfully adds another user to a group',
    () => {
      axios.post = jest.fn(() => Promise.resolve({
        groupId: []
      }));

      axios.get = jest.fn(() => Promise.resolve({
        data: {}
      }));

      const expectedActions = [
        {
          type: types.FETCH_USERS_IN_GROUP,
          users: {}
        }
      ];
      const store = mockStore();
      return store.dispatch(addUser(1, 2))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

