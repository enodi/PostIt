import React from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/auth/logInAction';
import DropDown from './DropDown';

class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(e) {
    e.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (!this.props.logged_in) {
      return(
          <nav>
           <div className="nav-wrapper #212121 grey darken-4">
             <IndexLink to="/" className="brand-logo"><span className="logo grey-text text-lighten-2">PostIt</span></IndexLink>
             <Link to="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
             <ul className="right hide-on-med-and-down">
               <li><Link to="/product">Product</Link></li>
               <li><Link to="/support">Support</Link></li>
               <li><Link to="/signin">My Account</Link></li>
             </ul>
             <ul className="side-nav" id="mobile-demo">
               <li><Link to="/product">Product</Link></li>
               <li><Link to="/support">Support</Link></li>
               <li><Link to="/signin">My Account</Link></li>
             </ul>
           </div>
         </nav>
      );
    } else {
      return(
        <nav className="white dashboard">
    				<div className="nav-wrapper">
    					<Link to="#" className="brand-logo li">PostIt</Link>
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
    								{/*<li className="li"><i className="material-icons">message</i></li>*/}
    								<li className="li">
                      <Link to="#"
                        className="dropdown-button li"
                        data-activates="dropdown" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;Enodi
                        <i className="material-icons right">
                          arrow_drop_down
                        </i>
                      </Link>
                    </li>
    						</ul>
    				</div>
            <DropDown
              profile="My Profile"
              board="Message Board"
              settings="Settings"
              signout="SignOut"/>
    			</nav>
      );
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
