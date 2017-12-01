import React from 'react';
import { connect } from 'react-redux';

import ForgotPassword from './ForgotPassword.jsx';
import { passwordResetLink } from '../../actions/resetPasswordAction';

/**
 * This class is the container component for forgot
 * password component
 *
 * @class ForgotPasswordContainer
 * @extends {React.Component}
 */
export class ForgotPasswordContainer extends React.Component {
  /**
   * Creates an instance of ForgotPasswordContainer.
   * Initializes the state and binds this to the methods
   * in the class
   *
   * @param {object} props
   *
   * @memberof ForgotPasswordContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  /**
   * Makes a post request to forgotPasword endpoint upon
   * successful validation
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof ForgotPasswordContainer
   * @method handleOnSubmit
   */
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.passwordResetLink(this.state);
    this.setState({
      email: ''
    });
  }

  /**
   * Takes in the target object and sets the state with
   * the form input
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof ForgotPasswordContainer
   * @method handleOnChange
   */
  handleOnChange(event) {
    const value = event.target.value.trim();
    this.setState({
      [event.target.name]: value
    });
  }

  /**
  * @returns {jsx} an xml/html like syntax extension for
  * javascript
  *
  * @memberof ForgotPasswordContainer
  */
  render() {
    return (
      <ForgotPassword
        handleOnChange={this.handleOnChange}
        handleOnSubmit={this.handleOnSubmit}
        state={this.state} />
    );
  }
}

export default connect(null, { passwordResetLink })(ForgotPasswordContainer);
