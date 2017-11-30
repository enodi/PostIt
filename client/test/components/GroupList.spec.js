import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import GroupList from '../../../client/src/components/Dashboard/Group/GroupList.jsx';

describe('GroupList Component', () => {
  it('should simulate onClick event', () => {
    const props = {
      active: () => {},
      group: {},
      activeGroup: {}
    };

    const wrapper = shallow(<GroupList {...props} />);
    wrapper.find(Link).simulate('click');
  });
});
