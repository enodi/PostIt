import React from 'react';
import Groups from './Groups';
import Friends from './Friends';
import '../../assets/main.scss';

export default class SideBar extends React.Component {
  render() {
    return(
      <div>
        <ul className="side-nav fixed" id="slide-out">
  				<li className="brand-logo logo-text">PostIt</li>
  				<li className="divider"></li>
  				<li><a href="#" className="sidebar-text">GROUPS<i className="material-icons right sidebar-text">&nbsp;&nbsp;&nbsp;&nbsp;add_box</i></a></li>
  				<Groups name="General" />
  				<li className="divider"></li>
  				<li><a href="#" className="sidebar-text">PERSONAL MESSAGES<i className="material-icons right sidebar-text">&nbsp;&nbsp;&nbsp;&nbsp;add_box</i></a></li>
  				<Friends />
  			</ul>
  			<a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    );
  }
}
