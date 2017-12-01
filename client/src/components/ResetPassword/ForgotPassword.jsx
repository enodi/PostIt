import React from 'react';

import InputField from '../Common/InputField.jsx';

/**
 * Gives the presentational view for forgotPassword component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const ForgotPassword = props => (
  <div className="container reset-password">
  <div className="row">
    <div className="col l8 offset-l2 s12 z-depth-2">
      <h2>Reset Password</h2>
      <p>Enter your email address and we will send you a password reset link</p>
      <form onSubmit={props.handleOnSubmit}>
        <div className="input-field col s12">
          <InputField
            value={props.state.email}
            onChange={props.handleOnChange}
            className="validate"
            label={'Email'}
            htmlFor={'email'}
            type={'email'}
            name={'email'}
            id={'email'}
            required
          />
        </div>
        <div className="row center button">
          <button className="btn-large waves-effect waves-light"
          type="submit" name="action">Submit </button>
        </div>
     </form>
    </div>
  </div>
</div>
);

export default ForgotPassword;
