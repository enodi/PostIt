import React from 'react';
import { AddUsersContainier } from '../../src/components/Dashboard/Users/AddUsersContainer.jsx';

const setup = () => {
  const props = {
    group: { id: 1 },
    searchResult: [{ id: 1, username: 'enodi' }, { id: 2, user: { id: 1 } }],
    searchUsers: jest.fn(),
    addUser: jest.fn()
  };

  const wrapper = mount(<AddUsersContainier {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Add Users Container', () => {
  const { props, wrapper } = setup();
  const event = {
    preventDefault: jest.fn(),
    target: {
      id: 1
    }
  };

  it('should dispatch add users action', () => {
    wrapper.instance().handleOnClick(event);
    expect(props.addUser.mock.calls.length).toEqual(1);
  });

  it('should dispatch search users action', () => {
    wrapper.instance().handleSearch(event);
    expect(props.searchUsers.mock.calls.length).toEqual(1);
  });
});
