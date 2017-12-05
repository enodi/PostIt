import React from 'react';

import { SigninContainer } from '../../src/components/Signin/SigninContainer.jsx';

jest.mock('react-dom');

const setup = () => {
  const props = {
    signinAction: jest.fn()
  };

  const wrapper = mount(<SigninContainer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Signin Container Component', () => {
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

  it('should return usernameError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'username',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.state().usernameError)
    .toEqual('Please insert your username');
  });

  it('should return passwordError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'password',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.state().passwordError)
    .toEqual('Please insert your password');
  });

  it('should clear usernameError when user clicks on username field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'username',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.state().usernameError).toEqual('');
  });

  it('should clear passwordError when user clicks on password field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'password',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.state().passwordError).toEqual('');
  });

  it('should dispatch signinAction action when user signin', () => {
    wrapper.setState({ username: 'enodi', password: 'password' });
    wrapper.instance().handleSubmit(event);
    expect(props.signinAction.mock.calls.length).toEqual(1);
  });
});
