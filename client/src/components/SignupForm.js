import React from 'react';
import Notifications, {notify} from 'react-notify-toast';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      error: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(e) {
    const name = e.target.name;
    switch (name) {
      case "fullname":
        this.setState({ fullnameError: '' });
        break;
      case "username":
        this.setState({ usernameError: '' });
        break;
      case "email":
        this.setState({ emailError: '' });
        break;
      case "password":
        this.setState({ passwordError: '' });
        break;
      default:
    }
  }

  onBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    const re = /\S+@\S+\.\S+/;
    const emailVal = re.test(value);
    switch (name) {
      case "fullname":
        if (!value) {
          this.setState({ fullnameError: 'This field is required'})
        }
        break;
      case "username":
        if (value.length < 4 || !value) {
          this.setState({ usernameError: 'Username should be atleast 4 characters'})
        }
        break;
      case "password":
        if (!value) {
          this.setState({ passwordError: 'This field is required'})
        }
        break;
      case "email":
        if (!value) {
          this.setState({ emailError: 'This field is required'})
        }
        if (!emailVal) {
          this.setState({ emailError: 'invalid email'})
        }
        break;
      default:
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // handles submitting of user data
  onSubmit(e) {
    const myColour = { background: '#2979FF', text: '#ffffff' };
    const notification = notify.show('SignUp Successful', "custom", 4000, myColour);
    e.preventDefault();
    this.props.signupAction(this.state)
    .then((res) => {
        notification;
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.log(error);
      })
      // .catch((error) => console.log(error))
    }

  render() {
    return(
      <div id="test-swipe-1" className="col s12">
        <Notifications />
        <h5>Create Your Account</h5>
        <div style={{color: 'red'}}>{this.state.error}</div>
        <form onSubmit={this.onSubmit}>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.fullname}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="text"
                name="fullname" required />
              <label htmlFor="fullname">Full Name</label>
            </div>
            <div style={{color:"red"}}>{this.state.fullnameError}</div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.username}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="text"
                name="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div style={{color:"red"}}>{this.state.usernameError}</div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.email}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="email"
                name="email"
                id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div style={{color:"red"}}>{this.state.emailError}</div>
          </div>
          <div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.password}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                className="validate"
                type="password"
                name="password"
                id="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div style={{color:"red"}}>{this.state.passwordError}</div>
          </div>
          {/*<div className="row signup">
            <div className="input-field col s12">
              <input
                value={this.state.group}
                onChange={this.onChange}
                onBlur={this.onBlur}
                className="validate"
                type="text"
                name="group"
                id="group" />
              <label htmlFor="group">Group (optional)</label>
            </div>
          </div>*/}
          <div className="row center button">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action">SIGNUP</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
