import React from 'react';
import { Link } from 'react-router';

const Groups = (props) => {
  return(
      <div>
        {
          props.groups && props.groups.Groups.map((group) => { return (
            <li key={group.id}>
              <Link to="#" 
                id={group.id}
                name={group.name}
                onClick={props.onActiveGroup} 
                className="sidebar-text black-text">{group.name}</Link></li>
          )
          })
        }
      </div>
    );
}

export default Groups; 
