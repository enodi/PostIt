import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

import * as types from '../../src/actions/actionTypes';
import { createGroup, retrieveGroupsSuccess,
  retrieveGroups, activeGroupSuccess } from '../../src/actions/groupAction';

const mockStore = configureMockStore([thunk]);

describe('Group Action', () => {
  it('should return appropriate action when group is retrieved successfully',
  () => {
    const action = retrieveGroupsSuccess([{ name: 'general' }]);
    expect(action).toEqual({
      type: 'RETRIEVE_GROUP_SUCCESSFUL',
      groups: [{
        name: 'general'
      }]
    });
  });

  it('should return appropriate action when a group is clicked', () => {
    const action = activeGroupSuccess([{ name: 'general' }]);
    expect(action).toEqual({
      type: 'ACTIVE_GROUP_CLICKED',
      active: [{
        name: 'general'
      }]
    });
  });

  it('should dispatch appropriate action on successful group retrieval', () => {
    axios.get = jest.fn(() => Promise.resolve({
      data: {
        groups: {
          Groups: []
        }
      }
    }));

    const expectedActions = [
      {
        type: types.RETRIEVE_GROUP_SUCCESSFUL,
        groups: []
      }
    ];
    const store = mockStore();
    return store.dispatch(retrieveGroups(1))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch appropriate action on successful group creation', () => {
    axios.post = jest.fn(() => Promise.resolve({
      userId: []
    }));

    const expectedActions = [
      {
        type: types.RETRIEVE_GROUP_SUCCESSFUL,
        groups: []
      }
    ];
    const store = mockStore();
    return store.dispatch(createGroup([{ name: 'general' }], 1))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

