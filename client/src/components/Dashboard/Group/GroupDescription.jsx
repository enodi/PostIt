import React from 'react';

const GroupDescription = props => (
  <div className="container">
    <div className="row">
      <div className="col s12 m10 offset-m2 l10 offset-l2">
      <li>
      {props.groups && props.groups.map(group => <span className="black-text" key={group.id}>{group.description}</span>)}
      </li>
      </div>
    </div>
  </div>
);

export default GroupDescription;
