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

describe('Signup Container Component', () => {
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

  it(`should return usernameError when user tries
  to signup with a username less than 4 characters`, () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'username',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.state().usernameError)
    .toEqual('Username cannot be less than 4 characters');
  });

  it('should return passwordError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'password',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.state().passwordError).toEqual('This field cannot be empty');
  });

  it('should return fullnameError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'fullname',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.state().fullnameError).toEqual('This field cannot be empty');
  });

  it('should return passwordError when user enters wrong email', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'email',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.state().emailError).toEqual('Invalid email');
  });

  it('should clear passwordError when user clicks on username field', () => {
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

  it('should clear passwordError when user clicks on fullname field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'fullname',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.state().fullnameError).toEqual('');
  });

  it('should clear passwordError when user clicks on email field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'email',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.state().emailError).toEqual('');
  });

  it('should dispatch signupAction action when user signup', () => {
    wrapper.setState({
      fullname: 'Enodi Audu',
      email: 'enodiaudu5@gmail.com',
      username: 'enodi',
      password: 'password' });
    wrapper.instance().onSubmit(event);
    expect(props.signupAction.mock.calls.length).toEqual(1);
  });
});
