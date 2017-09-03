import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;
    return(
      <div className="card">
        <div className={classnames('card', {
            'card-content': type === 'success',
            'card-title': type === 'error'
          })}>
           <button onClick={this.onClick} className="close"><span>&times;</span></button>
           {text}
        </div>
    </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
