import searchReducer from '../../src/reducers/searchReducer';

describe('Search Reducer', () => {
  it('should return proper initial state', () => {
    expect(searchReducer({}, {})).toEqual({});
  });

  it('should update the state when SEARCH_USERS_SUCCESSFUL is passed', () => {
    expect(searchReducer({}, {
      type: 'SEARCH_USERS_SUCCESSFUL',
      users: ['enodi']
    })).toEqual({
      search: ['enodi']
    });
  });
});
