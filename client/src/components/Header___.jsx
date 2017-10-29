import React from 'react';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { retrieveUsers } from '../actions/searchAction';
import { signoutUser } from '../actions/auth/signinAction';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchResult: []
    }

    this.onChange = this.onChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchResult) {
      this.setState({
        searchResult: nextProps.searchResult
      });
    }
  }

  onChange(event) {
    this.setState({ search: event.target.value });
    this.props.retrieveUsers(event.target.value);
  }

  handleOnClick(event) {
    event.preventDefault();
    this.props.signoutUser();
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
        <nav className="white dashboard logout-icon">
           <div className="nav-wrapper">
             <Link to="/" className="brand-logo li">PostIt</Link>
             <ul className="right hide-on-med-and-down">
               <li><i className="large material-icons black-text" onClick={this.handleOnClick}>input</i></li>
             </ul>
             <ul className="side-nav" id="mobile-demo">
               <li><i className="large material-icons black-text">input</i></li>
             </ul>
           </div>
         </nav>
      );
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    logged_in: state.authReducer.isAuthenticated,
    searchResult: state.searchReducer.search
  };
}

export default connect(mapStateToProps, { retrieveUsers, signoutUser })(Header);
