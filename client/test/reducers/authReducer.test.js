import authReducer from '../../src/reducers/authReducer';

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer({
      isAuthenticated: false,
      user: {}
    }, {})).toEqual([]);
  });
});
