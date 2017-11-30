import messageReducer from '../../src/reducers/messageReducer';

describe('Message Reducer', () => {
  it('should return proper initial state', () => {
    expect(messageReducer({}, {})).toEqual({});
  });

  it('should update the state when POST_MESSAGE_SUCCESSFUL is passed', () => {
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

  it('should update the state when RETRIEVE_MESSAGE_SUCCESSFUL is passed',
  () => {
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
