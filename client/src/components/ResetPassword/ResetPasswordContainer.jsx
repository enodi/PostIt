import React from 'react';
import { connect } from 'react-redux';
import ResetPassword from './ResetPassword';
import { resetPassword } from '../../actions/resetPasswordAction';

/**
 *
 *
 * @class ResetPasswordContainer
 * @extends {React.Component}
 */
export class ResetPasswordContainer extends React.Component {
  /**
   * Creates an instance of ResetPasswordContainer.
   * @param {any} props
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
   *
   *
   * @param {any} event
   * @memberof ResetPasswordContainer
   */
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   *
   *
   * @param {any} event
   * @memberof ResetPasswordContainer
   */
  handleOnSubmit(event) {
    event.preventDefault();
    const token = this.props.location.search;
    this.props.resetPassword(this.state, token);
  }

  /**
   *
   *
   * @returns
   * @memberof ResetPasswordContainer
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
