import React from 'react';

const MessageGroup = ({ groups }) =>
  (
    <div className="input-field col s12">
      <select multiple >
        {
          groups.map(group =>
            (<option
              id={group.id}
              value={group.name}
              disabled
              defaultValue
            />)
          )
        }
      </select>
      <label> Group Name(s) </label>
    </div>
  );

export default MessageGroup;
