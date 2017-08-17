import React from 'react';
import '../../assets/main.scss';

export default class Groups extends React.Component {
  render() {
    return(
      <div>
        <li><a href="#" className="sidebar-text">{this.props.name}</a></li>
        {/*<li><a href="#" className="sidebar-text">Andela-BootCamp</a></li>
        <li><a href="#" className="sidebar-text">Andela</a></li>*/}
      </div>
    );
  }
}
