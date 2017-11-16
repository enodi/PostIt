import messageReducer from '../../src/reducers/messageReducer';

describe('Message Reducer', () => {
  it('should return proper initial state', () => {
    expect(messageReducer({}, {})).toEqual({});
  });

  it('should post a new message', () => {
    expect(messageReducer({}, {
      type: 'POST_MESSAGE_SUCCESSFUL',
      message: {
        message: 'hello',
        priority: 'normal'
      }
    })).toEqual({
      Message: {
        message: 'hello',
        priority: 'normal'
      } }
    );
  });

  it('should retrieve all messages', () => {
    expect(messageReducer({
      groupMessages: []
    }, {
      type: 'RETRIEVE_MESSAGE_SUCCESSFUL',
      messages: [{
        message: 'hello',
        priority: 'normal'
      }]
    })).toEqual({
      groupMessages: [{
        message: 'hello',
        priority: 'normal'
      }] }
    );
  });
});
