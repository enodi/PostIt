import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('renders 1 <Header /> component', () => {
  const component = shallow(<Routes />);
  expect(component).toHaveLength(1);
  });
});
