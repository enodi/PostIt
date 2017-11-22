import React from 'react';
import { shallow } from 'enzyme';
import PostMessage from '../../../client/src/components/Dashboard/Message/PostMessageContainer.jsx';
import { Dashboard } from '../../../client/src/components/Dashboard/Dashboard.jsx';

jest.mock('react-dom');

describe('Dashboard Component', () => {
  it('renders Dashboard component', () => {
    const props = {
      groups: {
        activeGroup: { id: false }
      }
    };

    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find('h3').text()).toEqual('Welcome to PostIt');
  });

  it('renders one <PostMessage /> component', () => {
    const props = {
      groups: {
        activeGroup: { id: true }
      }
    };

    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(PostMessage)).toHaveLength(1);
  });
});
