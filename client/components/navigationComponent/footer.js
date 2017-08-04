import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return(
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
    					<div className="col l4 s12">
    						<h5 className="white-text">Features</h5>
    						<ul>
    							<li><Link to="/product">Product</Link></li>
    							<li><Link to="/support">Support</Link></li>
    						</ul>
    					</div>
    					<div className="col l4 s12">
    						<h5 className="white-text">Company</h5>
    						<ul>
    							<li><a href="#">Blog</a></li>
    							<li><a href="#">About Us</a></li>
    							<li><a href="#">Contact Us</a></li>
    						</ul>
    					</div>
    				</div>
    			</div>
    			<div className="footer-copyright">

          </div>
    		</footer>
      </div>
    );
  }
}
