import groupReducer from '../../src/reducers/groupReducer';

describe('Group Reducer', () => {
  it('should return proper initial state', () => {
    expect(groupReducer({}, {})).toEqual({});
  });

  it('should create a new group', () => {
    expect(groupReducer({}, {
      type: 'CREATE_GROUP_SUCCESSFUL',
      group: [{
        name: 'random',
        description: 'for random conversations'
      }]
    })).toEqual({
      Groups: [{
        name: 'random',
        description: 'for random conversations'
      }] }
    );
  });

  it('should retrieve groups', () => {
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

  it('should return active group clicked', () => {
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
