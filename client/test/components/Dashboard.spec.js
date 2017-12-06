import React from 'react';
import { shallow } from 'enzyme';

import SideBar from '../../../client/src/components/Dashboard/Sidebar.jsx';
import PostMessage from '../../../client/src/components/Dashboard/Message/PostMessageContainer.jsx';
import { Dashboard } from '../../../client/src/components/Dashboard/Dashboard.jsx';

jest.mock('react-dom');

describe('Dashboard Component', () => {
  it('should render one SideBar component', () => {
    const props = {
      groups: { id: 1 },
      users: {
        Users: {
          message: 'Users retrieved successfully',
          groupUsers: [{
            id: 2,
            email: 'agnes@gmail.com',
            username: 'agnes'
          }]
        }
      }
    };

    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(SideBar)).toHaveLength(1);
  });

  it('should render one <PostMessage /> component', () => {
    const props = {
      groups: { id: 1 },
      users: {
        Users: {
          message: 'Users retrieved successfully',
          groupUsers: [{ id: 2, email: 'agnes@gmail.com', username: 'agnes' }]
        }
      }
    };

    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(PostMessage)).toHaveLength(1);
  });
});
