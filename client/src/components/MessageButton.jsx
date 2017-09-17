import React from 'react';

class MessageButton extends React.Component {
  render() {
    return (
      <button
        className="btn-large"
        type="submit"
        name="action"
      > Post Message
      </button>
    );
  }
}

export default MessageButton;
