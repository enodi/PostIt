import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/main.scss';
import '../../assets/scripts.js';

export class DropDown extends Component {
  render() {
    return(
      <ul id="dropdown" className="dropdown-content">
        <li><a href="#">My Profile</a></li>
        <li><Link to="/creategroup">Create Group</Link></li>
        <li><Link to="/postmessage">Post Message</Link></li>
        <li><Link to="/messageboard">Message Board</Link></li>
        <li className="divider"></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">SignOut</a></li>
      </ul>
    );
  }
}
