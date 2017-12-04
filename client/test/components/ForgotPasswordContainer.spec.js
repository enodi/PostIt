import React from 'react';

import { ForgotPasswordContainer } from '../../src/components/ResetPassword/ForgotPasswordContainer.jsx';

jest.mock('react-dom');

const setup = () => {
  const props = {
    passwordResetLink: jest.fn()
  };

  const wrapper = mount(<ForgotPasswordContainer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Forgot password container', () => {
  const { props, wrapper } = setup();
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'enodiaudu5@gmail.com',
      name: 'email'
    }
  };

  it('should setState on input change', () => {
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state().email).toEqual('enodiaudu5@gmail.com');
  });

  it(`should dispatch passwordResetLink action when user
  requests for a new password`, () => {
    wrapper.setState({ email: 'enodiaudu5@gmail.com' });
    wrapper.instance().handleOnSubmit(event);
    expect(props.passwordResetLink.mock.calls.length).toEqual(1);
    expect(wrapper.state().email).toEqual('');
  });
});
