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
          validateInput={props.validateInput}
          onFocus={props.onFocus}
          className="validate"
          label={'Full Name'}
          htmlFor={'fullname'}
          type={'text'}
          name={'fullname'}
          id={'fullname'}
          required
        />
      </div>
    </div>
    <div className="row signin" >
      <div className="input-field col s12" >
        <InputField
          value={props.state.username}
          onChange={props.onChange}
          validateInput={props.validateInput}
          onFocus={props.onFocus}
          className="validate"
          label={'Username'}
          htmlFor={'username'}
          type={'text'}
          name={'username'}
          id={'username'}
          required
        />
      </div>
    </div>
    <div className="row signin" >
      <div className="input-field col s12" >
        <InputField
          value={props.state.email}
          onChange={props.onChange}
          validateInput={props.validateInput}
          onFocus={props.onFocus}
          className="validate"
          label={'Email'}
          htmlFor={'email'}
          type={'text'}
          name={'email'}
          id={'email'}
          required
        />
      </div>
    </div>
    <div className="row signin" >
      <div className="input-field col s12" >
        <InputField
          value={props.state.password}
          onChange={props.onChange}
          validateInput={props.validateInput}
          onFocus={props.onFocus}
          className="validate"
          label={'Password'}
          htmlFor={'password'}
          type={'password'}
          name={'password'}
          id={'password'}
          required
        />
      </div>
    </div>
    <div className="row center button">
      <button
        disabled={props.state.disable}
        className="btn-large waves-effect waves-light"
        type="submit"
        name="action">SIGNUP</button>
    </div>
  </form>
</div>
);

Signup.propTypes = {
  validateInput: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Signup;
