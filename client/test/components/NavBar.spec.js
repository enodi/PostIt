import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../../src/components/Header/NavBar.jsx';

describe('NavBar Component', () => {
  it('should render NavBar Component', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

