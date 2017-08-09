import React from 'react';
import '../../assets/main.scss';

export default class Groups extends React.Component {
  render() {
    return(
      <div>
        <li><a href="#" className="sidebar-text">{this.props.name}</a></li>
      </div>
    );
  }
}
