import React from 'react';
import { connect } from 'react-redux';

import PostMessage from './PostMessage.jsx';
import MessageBoard from './MessageBoard.jsx';
import { postMessage } from '../../../actions/messageAction';

/**
 * This class is the container component for
 * post message component
 *
 * @class PostMessageContainer
 * @extends {React.Component}
 */
export class PostMessageContainer extends React.Component {
  /**
   * Creates an instance of PostMessageContainer.
   * Initializes the state and binds this to the methods in the class
   *
   * @param {object} props
   *
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
   * Takes in the target object and sets the state with
   * the input
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof PostMessageContainer
   * @method priorityOnChange
   */
  priorityOnChange(event) {
    this.setState({
      priority: event.target.id
    });
  }

  /**
   * Takes in the target object and sets the state with
   * the form input
   *
   * @param {object} event
   *
   * @returns {void}
   * @memberof PostMessageContainer
   * @method handleOnChange
   */
  handleOnChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  /**
   * Makes a post request to postMessage endpoint upon
   * successful validation
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof PostMessageContainer
   * @method handleOnSubmit
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
  * @returns {jsx} an xml/html like syntax extension for
  * javascript
  *
  * @memberof PostMessageContainer
  */
  render() {
    return (
      <div>
      <PostMessage
        handleOnChange={this.handleOnChange}
        state={this.state}
        handleOnSubmit={this.handleOnSubmit}
        priorityOnChange={this.priorityOnChange}/>
      <MessageBoard groupMessages={this.props.messages}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.groupReducer,
  messages: state.messageReducer.groupMessages.messageRetrieved
});

export default connect(mapStateToProps, { postMessage })(PostMessageContainer);
