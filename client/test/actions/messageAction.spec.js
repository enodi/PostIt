import thunk from 'redux-thunk';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';

import * as types from '../../src/actions/actionTypes';
import { postMessage, getMessages,
  getMessageSuccess, messageSuccess } from '../../src/actions/messageAction';

const mockStore = configureMockStore([thunk]);

describe('Message Action', () => {
  it(`should return appropriate action when message
  is retrieved successfully`, () => {
    const action = getMessageSuccess(['hello']);
    expect(action).toEqual({
      type: 'RETRIEVE_MESSAGE_SUCCESSFUL',
      messages: ['hello']
    });
  });

  it('should return appropriate action when message is posted successfully',
  () => {
    const action = messageSuccess({ message: 'hello', priority: 'normal' });
    expect(action).toEqual({
      type: 'POST_MESSAGE_SUCCESSFUL',
      message: {
        message: 'hello',
        priority: 'normal'
      }
    });
  });

  it(`should return appropriate action when message
  is retrieved successfully`, () => {
    axios.get = jest.fn(() => Promise.resolve({
      data: {}
    }));

    const expectedActions = [
      {
        type: types.RETRIEVE_MESSAGE_SUCCESSFUL,
        messages: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(getMessages(1))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`should dispatch appropriate action when user
  successfully post a message`, () => {
    axios.post = jest.fn(() => Promise.resolve({
      groupId: []
    }));

    const expectedActions = [
      {
        type: types.RETRIEVE_MESSAGE_SUCCESSFUL,
        messages: {}
      }
    ];
    const store = mockStore();
    return store.dispatch(postMessage(1,
      { message: 'hello', priority: 'normal' }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
