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

describe('Signin container', () => {
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
    expect(wrapper.setState({ usernameError: 'Please insert your username' }));
  });

  it('handles passwordError when user enters an empty field', () => {
    const evt = { preventDefault: jest.fn(),
      target: {
        value: '',
        name: 'password',
      } };
    wrapper.instance().onBlur(evt);
    expect(wrapper.setState({ passwordError: 'Please insert your password' }));
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

  it('should dispatch signinAction action when user signin', () => {
    wrapper.setState({ username: 'enodi', password: 'password' });
    wrapper.instance().handleSubmit(event);
    expect(props.signinAction.mock.calls.length).toEqual(1);
  });
});
