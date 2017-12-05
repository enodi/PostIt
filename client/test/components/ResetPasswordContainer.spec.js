import React from 'react';

import { ResetPasswordContainer } from '../../src/components/ResetPassword/ResetPasswordContainer.jsx';

jest.mock('react-dom');

const setup = () => {
  const props = {
    resetPassword: jest.fn(),
    location: {
      search: ''
    }
  };

  const wrapper = mount(<ResetPasswordContainer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('Reset password Container Component', () => {
  const { props, wrapper } = setup();
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'password',
      name: 'password'
    }
  };

  it('should setState on input change', () => {
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state().password).toEqual('password');
  });

  it(`should dispatch resetPassword action when
  user requests for a new password`, () => {
    wrapper.setState({ password: 'password', confirmPassword: 'password' });
    wrapper.instance().handleOnSubmit(event);
    expect(props.resetPassword.mock.calls.length).toEqual(1);
  });
});
