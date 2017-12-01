import React from 'react';
import { shallow } from 'enzyme';

import 'materialize-css/dist/js/materialize';
import IndexPage from '../../src/components/IndexPage.jsx';

describe('IndexPage Component', () => {
  it('should render IndexPage Component', () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
