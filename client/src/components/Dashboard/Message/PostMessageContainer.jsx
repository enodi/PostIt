import React from 'react';
import { connect } from 'react-redux';
import PostMessage from './PostMessage.jsx';
import { messageAction } from '../../../actions/messageAction';

/**
 *
 *
 * @class PostMessageContainer
 * @extends {React.Component}
 */
class PostMessageContainer extends React.Component {
  /**
   * Creates an instance of PostMessageContainer.
   * @param {any} props
   * @memberof PostMessageContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      priority: 'normal',
      message: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.priorityOnChange = this.priorityOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  /**
   *
   *
   * @param {any} event
   * @memberof PostMessageContainer
   */
  priorityOnChange(event) {
    this.setState({
      priority: event.target.id
    });
  }

  /**
   *
   *
   * @param {any} event
   * @memberof PostMessageContainer
   */
  handleOnChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  /**
   *
   *
   * @param {any} event
   * @memberof PostMessageContainer
   */
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.messageAction(this.state);
  }

  /**
   *
   *
   * @returns
   * @memberof PostMessageContainer
   */
  render() {
    return (
      <PostMessage
        handleOnChange={this.handleOnChange}
        state={this.state}
        handleOnSubmit={this.handleOnSubmit}
        priorityOnChange={this.priorityOnChange}/>
    );
  }
}


export default connect(null, { messageAction })(PostMessageContainer);
