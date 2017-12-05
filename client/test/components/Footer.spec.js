import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../src/components/Footer.jsx';

describe('Footer Component', () => {
  it('should render Footer Component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
