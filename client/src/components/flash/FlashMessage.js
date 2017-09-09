import React from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {
  render() {
    const { text } = this.props.message;
    return(
      <div>{text}</div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export default FlashMessage;
