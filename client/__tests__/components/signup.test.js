import React from 'react';
import { SignupContainer } from '../../src/components/Signup/SignupContainer.jsx';

jest.mock('react-dom');

const setup = () => {
  const props = {
    signupAction: jest.fn()
  };

  const wrapper = mount(<SignupContainer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Signup container', () => {
  const { props, wrapper } = setup();
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'enodi',
      name: 'username',
    }
  };

  it('should setState on input change', () => {
    wrapper.instance().onChange(event);
    expect(wrapper.state().username).toEqual('enodi');
  });

  it('should dispatch signupAction action when user signup', () => {
    wrapper.setState({ fullname: 'Enodi Audu', email: 'enodiaudu5@gmail.com', username: 'enodi', password: 'password' });
    wrapper.instance().onSubmit(event);
    expect(props.signupAction.mock.calls.length).toEqual(1);
  });
});
