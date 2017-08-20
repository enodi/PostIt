import React from 'react';
import { Link } from 'react-router-dom';
// import '../../assets/main.scss';

export default class Header extends React.Component {
  render() {
    return(
      <nav>
       <div className="nav-wrapper #212121 grey darken-4">
         <Link to="/" className="brand-logo"><span className="logo grey-text text-lighten-2">PostIt</span></Link>
         <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
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
  }
}
