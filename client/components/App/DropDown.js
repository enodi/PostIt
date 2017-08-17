import React from 'react';
import '../../assets/main.scss';

export default class DropDown extends React.Component {
  render() {
    return(
      <div>
        <ul id="dropdown" className="dropdown-content">
          <li><a href="#">{this.props.profile}</a></li>
          <li><a href="createGroup.html">{this.props.group}</a></li>
          <li><a href="postMessage.html">{this.props.message}</a></li>
          <li><a href="dashboard.html">{this.props.board}</a></li>
          <li className="divider"></li>
          <li><a href="#">{this.props.settings}</a></li>
          <li><a href="#">{this.props.signout}</a></li>
        </ul>
      </div>
    );
  }
}
