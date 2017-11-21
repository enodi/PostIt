import React from 'react';
import { Link } from 'react-router';

/**
 * This component handles displaying the groups
 * a user belongs to
 *
 * @param {object} props
 *
 * @returns {void}
 */
const GroupList = (props) => {
  return (
    <div className="grouplist">
      <ul>
        <li
        className={props.activeGroup.id === props.group.id ?
        'active' : ''}
        key={props.group.id}>
          <Link to="#"
            onClick={event => props.active(event, props.group.name, props.group.id)}>{props.group.name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default GroupList;
