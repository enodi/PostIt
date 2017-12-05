import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../client/src/components/Header/index.jsx';
import NavBar from '../../../client/src/components/Header/NavBar.jsx';
import AddUsers from '../../../client/src/components/Dashboard/Users/AddUsersContainer.jsx';

jest.mock('react-dom');

describe('Header Component', () => {
  it(`should render <AddUsersContainier/> Component
  when a group is selected`, () => {
    const props = {
      loggedIn: true,
      groups: { id: 1 }
    };

    const wrapper = shallow(<Header {...props}/>);
    expect(wrapper.find(AddUsers)).toHaveLength(1);
  });

  it('ahould render <NavBar/> Component when user is not authenticated', () => {
    const props = {
      loggedIn: false,
      groups: { id: 1 }
    };

    const wrapper = shallow(<Header {...props}/>);
    expect(wrapper.find(NavBar)).toHaveLength(1);
  });
});
