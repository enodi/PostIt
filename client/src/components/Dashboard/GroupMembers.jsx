import React from 'react';

import placeholder from '../../assets/images/placeholder.png';

const GroupMembers = (props) => {
  const { groupUsers, message } = props;
  return (
    <div className="display-users black-text">
      <h5>Group Members</h5>
      {message === 'No other user exist in the group' &&
        <p>This group is lonely.
      Add members to the group and start chatting</p>}
      <ul>
        {groupUsers && groupUsers.map(user => (
          <li key={user.id} className="member">
            <img
              src={placeholder}
              alt="profile picture"
              className="circle responsive-img" />
            <span>{user.fullname}</span>
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default GroupMembers;
