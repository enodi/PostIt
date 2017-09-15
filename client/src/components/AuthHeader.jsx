import React from 'react';
import { Link } from 'react-router';
import DropDown from './DropDown';

export const AuthHeader = (props) => {
  return (
    <nav className="white dashboard">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo li">PostIt</Link>
        <ul className="hide-on-med-and-down right">
          <li className="li">
            <div className="center row">
              <div className="col s12 " >
                <div className="row" id="topbarsearch">
                  <div className="input-field col s6 s12 li">
                    <i className="material-icons prefix">search</i>
                    <input type="text" placeholder="Search..." id="autocomplete-input" className="autocomplete red-text" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="li"><Link to="#" className="dropdown-button li" data-activates="dropdown" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enodi<i className="material-icons right">arrow_drop_down</i></Link></li>
        </ul>
      </div>
      <DropDown profile="My Profile" board="Message Board" settings="Settings" signout="SignOut" />
    </nav>
  );
};
