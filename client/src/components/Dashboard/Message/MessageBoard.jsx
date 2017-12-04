import React from 'react';

import placeholder from '../../../assets/images/placeholder.png';

/**
 * Gives the presentational view for MessageBoard component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const MessageBoard = props => (
    <div className="display-message">
      {props.groupMessages && props
        .groupMessages
        .map(message => (
            <div className="" key={message.id}>
              <div className="row valign-wrapper">
                <div className="col m1">
                  <img
                    src={placeholder}
                    alt="profile picture"
                    className="circle responsive-img"/>
                </div>
                <div className="col m11">
                  <p key={message.User.id}>
                  <b>{message.User.username}</b>
                  <span className=
                  {`icon-new badge ${message.priority}
                  darken-4 white-text`}>{message.priority}</span>
                  </p>
                  <span className="black-text">{message.message}</span>
                </div>
              </div>
            </div>
          )
        )
  }
    </div>
);

export default MessageBoard;
