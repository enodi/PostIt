import userReducer from '../../src/reducers/userReducer';

describe('User Reducer', () => {
  it('should return proper initial state', () => {
    expect(userReducer({}, {})).toEqual({});
  });

  it('should add users to the group', () => {
    expect(userReducer({}, {
      type: 'ADD_USERS_TO_GROUP',
      user: [{
        username: 'enodi',
      }]
    })).toEqual({
      Users: [{
        username: 'enodi',
      }] }
    );
  });
});
