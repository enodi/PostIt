import React from 'react';
import '../../assets/main.scss';
import '../../assets/scripts.js';

export default class AuthHeader extends React.Component {
  render() {
    return(
      <nav className="white dashboard">
  				<div className="nav-wrapper">
  					<a href="#" className="brand-logo li">PostIt</a>
  						<ul className="hide-on-med-and-down right">
  								<li className="li">
  									 <div className="center row">
  											<div className="col s12 " >
  												<div className="row" id="topbarsearch">
  													<div className="input-field col s6 s12 li">
  														<i className="material-icons prefix">search</i>
  														<input type="text" placeholder="search" id="autocomplete-input" className="autocomplete red-text" />
  														</div>
  													</div>
  												</div>
  											</div>
  									</li>
  								<li className="li"><i className="material-icons">message</i></li>
  								<li className="li"><a className="dropdown-button li" href="#!" data-activates="dropdown" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enodi<i className="material-icons right">arrow_drop_down</i></a></li>
  						</ul>
  				</div>
          <ul id="dropdown" className="dropdown-content">
  					<li><a href="#">My Profile</a></li>
  					<li><a href="createGroup.html">Create Group</a></li>
  					<li><a href="postMessage.html">Post Message</a></li>
  					<li><a href="dashboard.html">Message Board</a></li>
  					<li className="divider"></li>
  					<li><a href="#">Settings</a></li>
  					<li><a href="#">SignOut</a></li>
  				</ul>
  			</nav>
    );
  }
}
