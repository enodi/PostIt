import React from 'react';
import { shallow } from 'enzyme';

import PostMessage from '../../../client/src/components/Dashboard/Message/PostMessageContainer.jsx';
import { Dashboard } from '../../../client/src/components/Dashboard/Dashboard.jsx';

jest.mock('react-dom');

describe('Dashboard Component', () => {
  it('should render Dashboard component', () => {
    const props = {
      groups: { activeGroup: { id: false } },
      users: { Users: {
        message: 'Users retrieved successfully',
        groupUsers: [{
          id: 2,
          email: 'agnes@gmail.com',
          username: 'agnes'
        }] }
      }
    };

    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find('h3').text()).toEqual('Welcome to PostIt');
  });

  it('should render one <PostMessage /> component', () => {
    const props = {
      groups: { activeGroup: { id: true } },
      users: { Users: {
        message: 'Users retrieved successfully',
        groupUsers: [{ id: 2, email: 'agnes@gmail.com', username: 'agnes' }] } }
    };

    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(PostMessage)).toHaveLength(1);
  });
});
