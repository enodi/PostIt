import React, { Component } from 'react';

export class SideBar extends Component {
  render() {
    return(
      <div>
        <ul className="side-nav fixed" id="slide-out">
  				<li className="brand-logo logo-text">PostIt</li>
  				<li className="divider"></li>
  				<li><a href="#" className="sidebar-text">GROUPS<i className="material-icons right sidebar-text">&nbsp;&nbsp;&nbsp;&nbsp;add_box</i></a></li>
  				<li><a href="#" className="sidebar-text">General</a></li>
  				<li><a href="#" className="sidebar-text">Andela</a></li>
  				<li><a href="#" className="sidebar-text">Andela-BootCamp</a></li>
  				<li className="divider"></li>
  				<li><a href="#" className="sidebar-text">PERSONAL MESSAGES<i className="material-icons right sidebar-text">&nbsp;&nbsp;&nbsp;&nbsp;add_box</i></a></li>
  				<li><a href="#" className="sidebar-text">Audu</a></li>
  			</ul>
  			<a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    );
  }
}
