import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Group from './Group/Group.jsx';
import { groupAction, retrieveGroups } from '../../actions/groupAction';

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
  }

  /**
   *
   *
   * @memberof Sidebar
   */
  componentDidMount() {
    $('.modal').modal();
    const user = this.props.currentUser;
    console.log(user.userId);
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
    this.props.groupAction(this.state);
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
   * @returns
   * @memberof Sidebar
   */
  render() {
    return (
      <div>
      <Group
        groups={this.props.groups}
        handleOnChange={this.handleOnChange}
        state={this.state}
        onSubmit={this.onSubmit}
        handleRetrieveGroup={this.handleRetrieveGroup}/>
      </div>
    );
  }
}

Sidebar.propTypes = {
  groupAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.user,
  groups: state.groupReducer
});

export default connect(mapStateToProps,
  { groupAction, retrieveGroups })(Sidebar);
