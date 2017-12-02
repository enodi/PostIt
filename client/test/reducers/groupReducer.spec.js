import groupReducer from '../../src/reducers/groupReducer';

describe('Group Reducer', () => {
  it('should return proper initial state', () => {
    expect(groupReducer({}, {})).toEqual({});
  });

  it('should update the state when RETRIEVE_GROUP_SUCCESSFUL is passed', () => {
    expect(groupReducer({
      Groups: [{
        name: 'random',
        description: 'for random conversations'
      }]
    }, {
      type: 'RETRIEVE_GROUP_SUCCESSFUL',
      groups: [{
        name: 'random',
        description: 'for random conversations'
      }]
    })).toEqual({
      Groups: [{
        name: 'random',
        description: 'for random conversations'
      }]
    });
  });

  it('should update the state when ACTIVE_GROUP_CLICKED is passed', () => {
    expect(groupReducer({
      activeGroup: {}
    }, {
      type: 'ACTIVE_GROUP_CLICKED',
      active: {
        name: 'random',
        description: 'for random conversations'
      }
    })).toEqual({
      activeGroup: {
        name: 'random',
        description: 'for random conversations'
      }
    });
  });
});
