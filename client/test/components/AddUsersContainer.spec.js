import React from 'react';

import { AddUsersContainer }
from '../../src/components/Dashboard/Users/AddUsersContainer.jsx';

const setup = () => {
  const props = {
    group: { id: 1 },
    searchResult: [{ id: 1, username: 'enodi' }],
    searchUsers: jest.fn(),
    addUser: jest.fn()
  };

  const wrapper = mount(<AddUsersContainer {...props} />);
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
});
