import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/Header/NavBar.jsx';
import AuthNavBar from '../../src/components/Header/AuthNavBar.jsx';

describe('NavBar Component', () => {
  it('should render NavBar Component', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AuthNavBar Component', () => {
  it('should render AuthNavBar Component', () => {
    const wrapper = shallow(<AuthNavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

