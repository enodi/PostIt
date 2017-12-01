import React from 'react';
import { connect } from 'react-redux';

import ResetPassword from './ResetPassword.jsx';
import { resetPassword } from '../../actions/resetPasswordAction';

/**
 * This class is the container component for reset
 * password component
 *
 * @class ResetPasswordContainer
 * @extends {React.Component}
 */
export class ResetPasswordContainer extends React.Component {
  /**
   * Creates an instance of ResetPasswordContainer
   * Initializes the state and binds this to the methods
   * in the class
   *
   * @param {object} props
   *
   * @memberof ResetPasswordContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  /**
   * Takes in the target object and sets the state with the
   * form input
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof ResetPasswordContainer
   * @method handleOnChange
   */
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Makes a post request to resetPasword endpoint upon successful
   * validation
   *
   * @param {object} event
   *
   * @returns {void}
   * @memberof ResetPasswordContainer
   * @method handleOnSubmit
   */
  handleOnSubmit(event) {
    event.preventDefault();
    const token = this.props.location.search;
    this.props.resetPassword(this.state, token);
  }

   /**
  * @returns {jsx} an xml/html like syntax extension for javascript
  * @memberof ForgotPasswordContainer
  */
  render() {
    return (
      <ResetPassword
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
        state={this.state}
        />
    );
  }
}

export default connect(null, { resetPassword })(ResetPasswordContainer);
