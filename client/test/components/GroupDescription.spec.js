import React from 'react';
import { shallow } from 'enzyme';

import GroupDescription from '../../../client/src/components/Dashboard/Group/GroupDescription.jsx';

describe('GroupDescription Component', () => {
  it('should render GroupDescription component', () => {
    const props = {
      group: {}
    };

    const wrapper = shallow(<GroupDescription {...props} />);
    expect(wrapper.length).toEqual(1);
  });
});
