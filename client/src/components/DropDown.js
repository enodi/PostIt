import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import '../../assets/main.scss';

export default class DropDown extends Component {
  render() {
    return(
      <div>
        <ul id="dropdown" className="dropdown-content">
          <li><Link to="#">{this.props.profile}</Link></li>
          <li><Link to="/user">{this.props.board}</Link></li>
          <li className="divider"></li>
          <li><Link to="#">{this.props.settings}</Link></li>
          <li><Link to="#">{this.props.signout}</Link></li>
        </ul>
      </div>
    );
  }
}

DropDown.propTypes = {
  profile: PropTypes.string,
  board: PropTypes.string,
  settings: PropTypes.string,
  signout: PropTypes.string,
}
