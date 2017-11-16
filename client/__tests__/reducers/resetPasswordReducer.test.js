import resetPasswordReducer from '../../src/reducers/resetPasswordReducer';

describe('Reset Password Reducer', () => {
  it('should return proper initial state', () => {
    expect(resetPasswordReducer({}, {})).toEqual({});
  });

  it('should send password reset link', () => {
    expect(resetPasswordReducer({}, {
      type: 'FORGOT_PASSWORD_LINK_SUCCESS',
      emailSent: true,
      link: ['http://localhost:3200/resetPasswordYlMink']
    })).toEqual({
      emailSent: true,
      link: ['http://localhost:3200/resetPasswordYlMink']
    }
    );
  });

  it('should reset password', () => {
    expect(resetPasswordReducer({}, {
      type: 'PASSWORD_RESET_SUCCESS',
      resetPassword: true
    })).toEqual({
      resetPassword: true
    }
    );
  });
});
