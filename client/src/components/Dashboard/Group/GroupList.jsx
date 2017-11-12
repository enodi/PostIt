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
    <div>
      <ul>
        <li key={props.group.id}>
          <Link to="#"
            onClick={event => props.active(event, props.group.name, props.group.id)}>{props.group.name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default GroupList;
