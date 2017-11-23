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

  it('handles usernameError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'username',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.setState({ usernameError: 'This field cannot be empty' }));
  });

  it('handles passwordError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'password',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.setState({ passwordError: 'This field cannot be empty' }));
  });

  it('handles fullnameError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'fullname',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.setState({ fullnameError: 'This field cannot be empty' }));
  });

  it('handles emailError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'email',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.setState({ emailError: 'Invalid email' }));
  });

  it('handles clearing usernameError', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'username',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.setState({ usernameError: '' }));
  });

  it('handles clearing passwordError', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'password',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.setState({ passwordError: '' }));
  });

  it('handles clearing fullnameError', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'fullname',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.setState({ fullnameError: '' }));
  });

  it('handles clearing emailError', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        name: 'email',
      } };
    wrapper.instance().onFocus(evt);
    expect(wrapper.setState({ emailError: '' }));
  });

  it('should dispatch signupAction action when user signup', () => {
    wrapper.setState({ fullname: 'Enodi Audu', email: 'enodiaudu5@gmail.com', username: 'enodi', password: 'password' });
    wrapper.instance().onSubmit(event);
    expect(props.signupAction.mock.calls.length).toEqual(1);
  });
});
