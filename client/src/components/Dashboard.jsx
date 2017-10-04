import React from 'react';

const DashBoard = (props) => {
  return(
    <div className="row">
				<div className="col s12 m8 offset-m2 l9 offset-l2">
				{
					props.messages && props.messages.map((message) => { return (
	        <div className="card-panel z-depth-1" key={message.id}>
	          <div className="row valign-wrapper">
	            <div className="col s1">
	              <img src={require("../assets/images/pic.jpg")} alt="user profile picture" className="circle responsive-img" />
	            </div>
	            <div className="col s11">
								<b>{message.username}</b><br/><br/>
	              <span className="black-text">
	                {message.message}
	              </span>
	            </div>
	          </div>
	        </div>
					)
					})
					}
	      </div>
      </div>
  );
}

export default DashBoard;
