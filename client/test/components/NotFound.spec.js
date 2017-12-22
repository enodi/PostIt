import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../src/components/Common/NotFound.jsx';

describe('Not Found Component', () => {
  it('should render NotFound Component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
