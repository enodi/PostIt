import React from 'react';
import { Link } from 'react-router';

export default class Groups extends React.Component {
  render() {
    return(
      <div>
        <li><Link to="#" className="sidebar-text">{this.props.name}</Link></li>
        {/*<li><a href="#" className="sidebar-text">Andela-BootCamp</a></li>
        <li><a href="#" className="sidebar-text">Andela</a></li>*/}
      </div>
    );
  }
}
