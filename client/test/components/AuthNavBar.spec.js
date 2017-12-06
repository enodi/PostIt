import React from 'react';
import { shallow } from 'enzyme';

import { AuthNavBar } from '../../src/components/Header/AuthNavBar.jsx';

jest.mock('react-dom');

describe('AuthNavBar Component', () => {
  it('should render AuthNavBar Component', () => {
    const props = {
      group: {
        name: 'general'
      }
    };

    const wrapper = shallow(<AuthNavBar {...props} />);
    expect(wrapper.find('nav').prop('className'))
      .toEqual('white dashboard logout-icon');
    expect(props.group.name).toEqual('general');
  });
});
