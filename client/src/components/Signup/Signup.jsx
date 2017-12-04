import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../Common/InputField.jsx';

/**
 * Gives the presentational view for signup component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const Signup = props => (
  <div id="test-swipe-2" className="col s12">
    <h5 > Create Your Account </h5>
    <div style={{ color: 'red' }}>{props.error} </div>
    <form onSubmit={props.onSubmit}>
      <div className="row signin" >
        <div className="input-field col s12" >
          <InputField
            value={props.state.fullname}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            className="validate fullname"
            label={'Full Name'}
            htmlFor={'fullname'}
            type={'text'}
            name={'fullname'}
            id={'fullname'}
            required
          />
        </div>
        <div style={{ color: 'red' }}>{props.fullnameError} </div>
      </div>
      <div className="row signin" >
        <div className="input-field col s12" >
          <InputField
            value={props.state.username}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            className="validate username"
            label={'Username'}
            htmlFor={'username'}
            type={'text'}
            name={'username'}
            id={'username'}
            required
          />
        </div>
        <div style={{ color: 'red' }}>{props.usernameError} </div>
      </div>
      <div className="row signin" >
        <div className="input-field col s12" >
          <InputField
            value={props.state.email}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            className="validate email"
            label={'Email'}
            htmlFor={'email'}
            type={'text'}
            name={'email'}
            id={'email'}
            required
          />
        </div>
        <div style={{ color: 'red' }}>{props.emailError} </div>
      </div>
      <div className="row signin" >
        <div className="input-field col s12" >
          <InputField
            value={props.state.password}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            className="validate password"
            label={'Password'}
            htmlFor={'password'}
            type={'password'}
            name={'password'}
            id={'password'}
            required
          />
        </div>
        <div style={{ color: 'red' }}>{props.passwordError} </div>
      </div>
      <div className="row center button">
        <button
          className="btn-large waves-effect waves-light"
          type="submit"
          name="action">SIGNUP</button>
      </div>
    </form>
    <p className="red-text"><b>NB: whitespace is trimmed in password</b></p>
  </div>
);

Signup.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Signup;
