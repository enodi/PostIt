import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.loginAction(this.state).then(
      (res) => this.context.router.history.push('/user/user_id')
    );
  }

  render() {
    return(
      <div id="test-swipe-2" className="col s12">
        <h5>Log Into Your Account</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row signin">
            <div className="input-field col s12">
              <input
                value={this.state.username}
                onChange={this.onChange}
                className="validate"
                type="text"
                name="username"
                id="username" required />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row signin">
            <div className="input-field col s12">
              <input
                value={this.state.password}
                onChange={this.onChange}
                className="validate"
                type="password"
                name="password"
                id="password" required />
              <label htmlFor="password">Password</label>
              <br/><br/><br/><br/>
            </div>
          </div>
          <div className="row center button">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action">SIGNIN</button><br/><br/>
            <b><Link to="/resetpassword">Forgot your password?</Link></b>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { loginAction })(LoginForm);
