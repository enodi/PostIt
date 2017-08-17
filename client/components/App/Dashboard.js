import React from 'react';
import ActivityItem from './ActivityItem';
import '../../assets/main.scss';

export default class DashBoard extends React.Component {
  render() {
    const {activities} = this.props;
    return(
      <div className="row">
        {activities.map((activity, i) => (
          <ActivityItem activity={activity} key={i} />
        ))}
      </div>
    );
  }
}
				{/*<div className="col s12 m8 offset-m2 l9 offset-l3">
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
      </div>*/}
