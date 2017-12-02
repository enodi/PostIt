import authReducer from '../../src/reducers/authReducer';

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer({
      isAuthenticated: false,
      user: {}
    }, {})).toEqual({
      isAuthenticated: false, user: {}
    });
  });

  it('should update the state when SIGNUP_SUCCESSFUL is passed', () => {
    expect(authReducer({}, {
      type: 'SIGNUP_SUCCESSFUL',
      isAuthenticated: true,
      user: {
        fullname: 'Enodi Audu',
        username: 'enodi',
        password: 'password',
        email: 'enodiaudu5@gmail.com'
      }
    })).toEqual({
      isAuthenticated: true,
      user: {
        fullname: 'Enodi Audu',
        username: 'enodi',
        password: 'password',
        email: 'enodiaudu5@gmail.com'
      }
    });
  });

  it('should update the state when SIGN_IN_SUCCESS is passed', () => {
    expect(authReducer({}, {
      type: 'SIGN_IN_SUCCESS',
      isAuthenticated: true,
      user: {
        username: 'enodi',
        password: 'password',
      }
    })).toEqual({
      isAuthenticated: true,
      user: {
        username: 'enodi',
        password: 'password',
      }
    });
  });
});
