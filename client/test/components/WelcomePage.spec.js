import React from 'react';
import { shallow } from 'enzyme';

import WelcomePage from '../../src/components/Dashboard/WelcomePage.jsx';

describe('Welcome Page Component', () => {
  it('should render WelcomePage Component', () => {
    const wrapper = shallow(<WelcomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
