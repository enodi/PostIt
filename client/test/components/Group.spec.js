import React from 'react';

import 'materialize-css/dist/js/materialize';
import { Sidebar } from '../../src/components/Dashboard/Sidebar.jsx';

jest.mock('react-dom');

const setup = () => {
  const props = {
    currentUser: { id: 1 },
    groups: {
      Groups: [{ id: 1, name: 'general' }],
      activeGroup: { id: 1, name: 'general' }
    },
    createGroup: jest.fn(),
    retrieveGroups: jest.fn(),
    activeGroup: jest.fn(),
    signoutUser: jest.fn(),
    getMessages: jest.fn()
  };

  const wrapper = mount(<Sidebar {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Side bar Container', () => {
  const { props, wrapper } = setup();
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'general',
      name: 'name'
    }
  };

  it('should setState on input change', () => {
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state().name).toEqual('general');
  });

  it('should dispatch createGroup action when group is created', () => {
    wrapper.setState({
      name: 'random',
      description: 'for random conversations'
    });
    wrapper.instance().onSubmit(event);
    expect(props.createGroup.mock.calls.length).toEqual(1);
  });

  it('should dispatch signoutUser action when user signs out', () => {
    wrapper.instance().handleOnClick(event);
    expect(props.signoutUser.mock.calls.length).toEqual(1);
  });

  it('should dispatch activeGroup action when user clicks on a group', () => {
    wrapper.instance().handleActiveGroup(event);
    expect(props.activeGroup.mock.calls.length).toEqual(1);
  });
});
