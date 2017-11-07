import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Group from './Group/Group.jsx';
import { signoutUser } from '../../actions/auth/signinAction';
import { createGroup, retrieveGroups, activeGroup } from '../../actions/groupAction';

/**
 *
 *
 * @class Sidebar
 * @extends {React.Component}
 */
class Sidebar extends React.Component {
  /**
   * Creates an instance of Sidebar.
   * @param {any} props
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
  }

  /**
   *
   *
   * @memberof Sidebar
   */
  componentDidMount() {
    $('.modal').modal();
    const user = this.props.currentUser;
    this.props.retrieveGroups(user.userId);
  }

  /**
   *
   *
   * @param {any} event
   * @memberof Sidebar
   */
  onSubmit(event) {
    event.preventDefault();
    const user = this.props.currentUser;
    this.props.createGroup(this.state, user.userId);
  }

  /**
   *
   *
   * @param {any} event
   * @returns {}
   * @memberof Sidebar
   */
  handleActiveGroup(event, name, id) {
    event.preventDefault();
    this.props.activeGroup({ name, id });
  }

  /**
   *
   *
   * @param {any} event
   * @memberof Sidebar
   */
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   *
   *
   * @param {any} event
   * @memberof Sidebar
   */
  handleOnClick(event) {
    event.preventDefault();
    this.props.signoutUser();
  }

  /**
   *
   *
   * @returns
   * @memberof Sidebar
   */
  render() {
    return (
      <div>
        <Group
          groups={this.props.groups.Groups}
          handleOnChange={this.handleOnChange}
          state={this.state}
          onSubmit={this.onSubmit}
          active={this.handleActiveGroup}
          handleOnClick={this.handleOnClick}/>
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
  { createGroup, retrieveGroups, activeGroup, signoutUser })(Sidebar);
