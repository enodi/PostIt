import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from './Footer.jsx';
import backgroundImage from '../assets/images/3.jpg';
import placeholder from '../assets/images/bk2.png';
import screenShot from '../assets/images/screen1.png';
import screenShot1 from '../assets/images/screen2.png';
import screenShot2 from '../assets/images/screen3.png';

/**
 * This handles the landing page
 * @export
 * @class IndexPage
 * @extends {Component}
 */
export default class IndexPage extends Component {
  /**
   * Initializes component parallax image
   *
   * @returns {void}
   *
   * @memberof IndexPage
   */
  componentDidMount() {
    $('.parallax').parallax();
    $('.button-collapse').sideNav();
  }

  /**
   * @returns {jsx} a xml/html like syntax extension for javascript
   *
   * @memberof IndexPage
   */
  render() {
    return (
      <div>
        <div className="parallax-container valign-wrapper">
          <div className="container">
            <div className="row">
              <div className="col l8 s12 white-text">
                <h1 className="left-align valign">Welcome to PostIt</h1>
                   <h4 className="thin-text">
                   PostIt brings all pieces of conversation and people to
                   a place so that communication becomes easy</h4>
              </div>
            </div>
            <div className="row">
              <div className="col l4">
                <Link to ='/account'
                className="waves-effect hoverable btn-large">Get Started</Link>
              </div>
            </div>
          </div>
           <div className="parallax">
             <img src={backgroundImage} alt="" />
            </div>
         </div>

      <div className="background #000000 black">
        <div className="row center-align">
          <div className="col l12 s12">
            <img src={placeholder} className="responsive-img" alt="" />
          </div>
        </div>
      </div>

        <div className="container talk">
        <div className="row">
          <div className="col l12 center-align">
            <h4>Best way to talk together</h4><br/>
          </div>
          <div className="col l4">
              <div className="card">
                <div className="card-image">
                  <img src={screenShot} alt="" />
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="card-action">
                  <Link to="#">View more</Link>
                </div>
              </div>
          </div>

          <div className="col l4">
              <div className="card">
                <div className="card-image">
                  <img src={screenShot1} alt=""/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolo Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="card-action">
                  <Link to="#">View more</Link>
                </div>
              </div>
          </div>

          <div className="col l4">
              <div className="card">
                <div className="card-image">
                  <img src={screenShot2} alt=""/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>Lorem ipsum dolo Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="card-action">
                  <Link to="#">View more</Link>
                </div>
              </div>
            </div>
          </div>
        </div><br/>
      <Footer />
    </div>
    );
  }
}
