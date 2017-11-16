import React from 'react';
import { shallow } from 'enzyme';
import 'materialize-css/dist/js/materialize';
import AuthenticationPage from '../../src/components/AuthenticationPage.jsx';

describe('AuthenticationPage Component', () => {
  it('should render AuthenticationPage Component', () => {
    const wrapper = shallow(<AuthenticationPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
