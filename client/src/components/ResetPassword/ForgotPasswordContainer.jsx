import React from 'react';
import { connect } from 'react-redux';
import ForgotPassword from './ForgotPassword.jsx';
import { passwordResetLink } from '../../actions/resetPasswordAction';

class ForgotPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.passwordResetLink(this.state);
    this.setState({
      email: ''
    });
  }

  handleOnChange(event) {
    const value = event.target.value.trim();
    this.setState({
      [event.target.name]: value
    });
  }

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
