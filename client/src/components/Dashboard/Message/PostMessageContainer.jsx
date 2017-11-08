import React from 'react';
import { connect } from 'react-redux';
import PostMessage from './PostMessage.jsx';
import MessageBoard from './MessageBoard.jsx';
import { postMessage } from '../../../actions/messageAction';

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
    const group = this.props.group;
    this.props.postMessage(group.activeGroup.id, this.state);
    this.setState({
      priority: 'normal',
      message: ''
    });
  }

  /**
   *
   *
   * @returns
   * @memberof PostMessageContainer
   */
  render() {
    return (
      <div>
      <MessageBoard groupMessages={this.props.messages}/>
        <PostMessage
          handleOnChange={this.handleOnChange}
          state={this.state}
          handleOnSubmit={this.handleOnSubmit}
          priorityOnChange={this.priorityOnChange}/>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.groupReducer,
  messages: state.messageReducer.groupMessages
});

export default connect(mapStateToProps, { postMessage })(PostMessageContainer);
