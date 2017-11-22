import searchReducer from '../../src/reducers/searchReducer';

describe('Search Reducer', () => {
  it('should return proper initial state', () => {
    expect(searchReducer({}, {})).toEqual({});
  });

  it('should search for users', () => {
    expect(searchReducer({}, {
      type: 'SEARCH_USERS_SUCCESSFUL',
      users: ['enodi']
    })).toEqual({
      search: ['enodi']
    });
  });
});
