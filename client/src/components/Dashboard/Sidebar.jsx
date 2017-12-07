import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Group from './Group/Group.jsx';
import { getMessages } from '../../actions/messageAction';
import { signoutUser } from '../../actions/auth/signinAction';
import { createGroup, retrieveGroups, activeGroup } from
  '../../actions/groupAction';

/**
 * This class is the container component for group
 * component
 *
 * @class Sidebar
 * @extends {React.Component}
 */
export class Sidebar extends React.Component {
  /**
   * Creates an instance of Sidebar.
   * Initializes the state and binds this to the methods
   * in the class
   *
   * @param {object} props
   *
   * @memberof Sidebar
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleActiveGroup = this.handleActiveGroup.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  /**
   * Initializes component modal
   *
   * @returns {userGroups} userGroups
   *
   * @memberof Sidebar
   */
  componentDidMount() {
    $('.modal').modal();
    const id = localStorage.getItem('activeId');
    const name = localStorage.getItem('activeName');
    const user = this.props.currentUser;
    this.props.retrieveGroups(user.userId);
    if (id !== null) {
      this.props.activeGroup({ id, name });
    }
  }

  /**
   * Makes a post request to createGroup endpoint upon
   * successful validation
   *
   * @param {object} event
   *
   * @returns {group} group
   *
   * @memberof Sidebar
   * @method onSubmit
   */
  onSubmit(event) {
    event.preventDefault();
    const user = this.props.currentUser;
    this.props.createGroup(this.state, user.userId);
  }

  /**
   * Takes in the target object of the onclick event and passes an object
   * containing the clicked group's id and name to the redux store
   * then retrieves all messages in the clicked group
   *
   * @param {object} event
   * @param {object} name
   * @param {object} id
   * @param {object} description
   *
   * @returns {activeGroup} activeGroup
   *
   * @memberof Sidebar
   * @method handleActiveGroup
   */
  handleActiveGroup(event, name, id) {
    event.preventDefault();
    localStorage.setItem('activeId', id);
    localStorage.setItem('activeName', name);
    this.props.activeGroup({ name, id });
  }

  /**
   * Takes in the target object and sets the state with
   * the form input
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof Sidebar
   * @method handleOnChange
   */
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Takes in the target object of the onclick event
   * and signs a user out
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof Sidebar
   * @method handleOnClick
   */
  handleOnClick(event) {
    event.preventDefault();
    this.props.signoutUser();
  }

  /**
   * Takes in the target object of the onclick event
   * and resets the group and description fields
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof Sidebar
   * @method handleReset
   */
  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: '',
      description: ''
    });
  }

  /**
  * @returns {jsx} an xml/html like syntax extension for
  * javascript
  *
  * @memberof Sidebar
  */
  render() {
    return (
      <div>
        <Group
          groups={this.props.groups.Groups}
          activeGroup={this.props.groups.activeGroup}
          handleOnChange={this.handleOnChange}
          state={this.state}
          onSubmit={this.onSubmit}
          active={this.handleActiveGroup}
          handleOnClick={this.handleOnClick}
          handleReset={this.handleReset} />
      </div>
    );
  }
}

Sidebar.propTypes = {
  createGroup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.user,
  groups: state.groupReducer
});

export default connect(mapStateToProps,
  {
    createGroup,
    retrieveGroups,
    activeGroup,
    signoutUser,
    getMessages
  })(Sidebar);
