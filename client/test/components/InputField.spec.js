import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../../src/components/Common/InputField.jsx';

describe('InputField Component', () => {
  it('should render InputField Component', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot();
  });
});
