import React from 'react';

import InputField from '../Common/InputField.jsx';

/**
 * Gives the presentational view for resetPassword component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const ResetPassword = props => (
  <div className="container reset-password">
  <div className="row">
    <div className="col l8 offset-l2 s12 z-depth-2">
      <h2>Reset Password</h2>
      <form onSubmit={props.handleOnSubmit}>
        <div className="input-field col s12">
          <InputField
            className="validate"
            label={'Password'}
            value={props.state.password}
            onChange={props.handleOnChange}
            htmlFor={'password'}
            type={'password'}
            name={'password'}
            id={'password'}
            required
          />
        </div>
        <div className="input-field col s12">
          <InputField
            className="validate"
            label={'Confirm Password'}
            value={props.state.confirmPassword}
            onChange={props.handleOnChange}
            htmlFor={'password'}
            type={'password'}
            name={'confirmPassword'}
            id={'confirmPassword'}
            required
          />
        </div>
        <div className="row center button">
          <button className="btn-large waves-effect waves-light"
          type="submit" name="action">Save Password</button>
        </div>
     </form>
    </div>
  </div>
</div>
);

export default ResetPassword;
