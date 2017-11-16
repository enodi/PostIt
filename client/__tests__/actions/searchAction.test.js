import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import * as types from '../../src/actions/actionTypes';
import { searchUsers, searchUsersSuccess } from '../../src/actions/searchAction';

const mockStore = configureMockStore([thunk]);

describe('Search Action', () => {
  it('should search for users', () => {
    const action = searchUsersSuccess({ username: 'enodi' });
    expect(action).toEqual({
      type: 'SEARCH_USERS_SUCCESSFUL',
      users: {
        username: 'enodi'
      }
    });
  });

  it('handles search user action', () => {
    axios.get = jest.fn(() => Promise.resolve({
      data: {}
    }));

    const expectedActions = [
      {
        type: types.SEARCH_USERS_SUCCESSFUL,
        users: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(searchUsers({ username: 'enodi' }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
