import React, { Component } from 'react';

export class IndexSection extends Component {
  render() {
    return(
      <div>
      <div className="parallax-container valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col l8 s12 white-text">
              <h1 className="left-align valign">Welcome to PostIt</h1>
    					 <h4 className="thin-text">PostIt brings all pieces of conversation and people to a place so that communication becomes easy</h4>
            </div>
          </div>
          <div className="row">
            <div className="col l4">
              <a className="waves-effect hoverable btn-large" href="signUp.html">Get Started</a>
            </div>
          </div>
        </div>
         <div className="parallax"><img src={require("../../assets/images/3.jpg")}/></div>
       </div>

   		<div className="background #000000 black">
   			<div className="row center-align">
   				<div className="col l12 s12">
   					<img src={require("../../assets/images/bk2.png")} className="circle responsive-img" />
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
                <img src={require("../../assets/images/screen1.png")}/>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="card-action">
                <a href="#">View more</a>
              </div>
            </div>
  				</div>

  				<div className="col l4">
            <div className="card">
              <div className="card-image">
                <img src={require("../../assets/images/screen2.png")}/>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="card-action">
                <a href="#">View more</a>
              </div>
            </div>
  				</div>

  				<div className="col l4">
            <div className="card">
              <div className="card-image">
                <img src={require("../../assets/images/screen3.png")}/>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="card-action">
                <a href="#">View more</a>
              </div>
            </div>
  				</div>
  			</div>
  		</div>
      </div>
    );
  }
}
