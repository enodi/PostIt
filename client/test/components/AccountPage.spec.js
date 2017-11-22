import React from 'react';
import { shallow } from 'enzyme';
import 'materialize-css/dist/js/materialize';
import AccountPage from '../../src/components/AccountPage.jsx';

describe('AccountPage Component', () => {
  it('should render AuthenticationPage Component', () => {
    const wrapper = shallow(<AccountPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
