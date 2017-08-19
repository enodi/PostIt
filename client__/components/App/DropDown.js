import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/main.scss';

export default class DropDown extends React.Component {
  render() {
    return(
      <div>
        <ul id="dropdown" className="dropdown-content">
          <li><a href="#">{this.props.profile}</a></li>
          <li><Link to="/">{this.props.board}</Link></li>
          <li className="divider"></li>
          <li><a href="#">{this.props.settings}</a></li>
          <li><a href="#">{this.props.signout}</a></li>
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
