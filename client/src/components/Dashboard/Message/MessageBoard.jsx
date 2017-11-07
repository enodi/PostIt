import React from 'react';

const MessageBoard = props => (
  <div className="row display-message">
    <div className="col s12 m10 offset-m2 l10 offset-l2">
    {
      props.groupMessages && props.groupMessages.map((message) => { return (
      <div className="" key={message.id}>
        <div className="row valign-wrapper">
          <div className="col s1">
            <img src={require('../../../assets/images/placeholder.png')} alt="profile picture" className="circle responsive-img"/>
          </div>
          <div className="col s11">
            <p key={message.User.id}><b>{message.User.username}</b></p>
            <span className="black-text">{message.message}</span>
          </div>
        </div>
      </div>
      );
      })
    }
    </div>
  </div>
);

export default MessageBoard;
