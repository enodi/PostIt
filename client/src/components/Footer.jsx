import React from 'react';
import { Link } from 'react-router';


const Footer = () => (
  <div>
  <br/>
    <footer className="page-footer #000000 black">
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h5><Link to="/" className="white-text">PostIt</Link></h5>
            <ul>
              <li className="grey-text text-lighten-4">&copy; 2017</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright"></div>
    </footer>
  </div>
);

export default Footer;
