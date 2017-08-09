import React from 'react';
import '../../assets/main.scss';

export default class DashBoard extends React.Component {
  render() {
    return(
      <div className="row">
				<div className="col s12 m8 offset-m2 l9 offset-l3">
	        <div className="card-panel z-depth-1">
	          <div className="row valign-wrapper">
	            <div className="col s1">
	              <img src={require("../../assets/images/pic.jpg")} alt="" className="circle responsive-img"/>
	            </div>
	            <div className="col s11">
								<b>Xerxes</b><br/><br/>
	              <span className="black-text">
	                Hello. Feivel you did not send the document to me yesterday
	              </span>
	            </div>
	          </div>
	        </div>
	      </div>

				<div className="col s12 m8 offset-m2 l9 offset-l3">
	        <div className="card-panel z-depth-1">
	          <div className="row valign-wrapper">
	            <div className="col s1">
	              <img src={require("../../assets/images/pic1.jpg")} alt="" className="circle responsive-img"/>
	            </div>
	            <div className="col s11">
								<b>Feivel</b><br/><br/>
	              <span className="black-text">
	                Sorry I will do that right away.
	              </span>
	            </div>
	          </div>
	        </div>
	      </div>

				<div className="col s12 m8 offset-m2 l9 offset-l3">
	        <div className="card-panel z-depth-1">
	          <div className="row valign-wrapper">
	            <div className="col s1">
	              <img src={require("../../assets/images/pic2.jpg")} alt="" className="circle responsive-img"/>
	            </div>
	            <div className="col s11">
								<b>Adiel</b><br/><br/>
	              <span className="black-text">
	                When is the meeting holding
	              </span>
	            </div>
	          </div>
	        </div>
	      </div>

				<div className="col s12 m8 offset-m2 l9 offset-l3">
	        <div className="card-panel z-depth-1">
	          <div className="row valign-wrapper">
	            <div className="col s1">
	              <img src={require("../../assets/images/pic3.jpg")} alt="" className="circle responsive-img"/>
	            </div>
	            <div className="col s11">
								<b>Ariella</b><br/><br/>
	              <span className="black-text">
	                Tomorrow
	              </span>
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
    );
  }
}
