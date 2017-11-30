import userReducer from '../../src/reducers/userReducer';

describe('User Reducer', () => {
  it('should return proper initial state', () => {
    expect(userReducer({}, {})).toEqual({});
  });

  it('should update the state when ADD_USERS_TO_GROUP is passed', () => {
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

  it('should update the state when FETCH_USERS_IN_GROUP is passed', () => {
    expect(userReducer({}, {
      type: 'FETCH_USERS_IN_GROUP',
      users: [{
        fullname: 'Enodi Audu'
      }]
    })).toEqual({
      Users: [{
        fullname: 'Enodi Audu'
      }] }
    );
  });
});
