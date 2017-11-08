import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import InputField from '../Common/InputField.jsx';

const Signin = props => (
  <div id="test-swipe-1" className="col s12">
  <h5 > Log Into Your Account </h5>
  <div style={{ color: 'red' }}>{props.error} </div>
  <form onSubmit={props.handleSubmit}>
    <div className="row signin" >
      <div className="input-field col s12" >
        <InputField
          value={props.state.username}
          onChange={props.onChange}
          onBlur={props.onBlur}
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
      <div style={{ color: 'red' }}>{props.usernameError}</div>
    </div>
    <div className="row signin" >
      <div className="input-field col s12" >
        <InputField
          value={props.state.password}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          className="validate"
          label={'Password'}
          htmlFor={'password'}
          type={'password'}
          name={'password'}
          id={'password'}
          required
        />
      </div> <div style={{ color: 'red' }}>
        {props.passwordError} </div>
    </div>
    <div className="row center button">
      <button
        className="btn-large waves-effect waves-light"
        type="submit"
        name="action"
      >SIGNIN
      </button>
      <b><Link to="/resetpassword"> Forgot your password ? </Link></b>
    </div>
  </form>
</div>
);

Signin.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Signin;