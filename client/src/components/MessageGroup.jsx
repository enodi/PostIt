import React from 'react';

const MessageGroup = () =>
  (
    <div className="input-field col s12">
      <select multiple >
        <option
          disabled
          defaultValue
        />
      </select>
      <label> Group Name(s) </label>
    </div>
  );

export default MessageGroup;
