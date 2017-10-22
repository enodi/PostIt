import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Groups = ({
  groups,
  onActiveGroup
}) => {
  (
    <div>
      {
        groups && groups.Groups.map((group) => { return (
          <li key={group.id}>
            <Link to="#" 
              id={group.id}
              name={group.name}
              onClick={onActiveGroup} 
              className="sidebar-text black-text">{group.name}
            </Link>
          </li>
        )
        })
      }
    </div>
  );
}

export default Groups; 
