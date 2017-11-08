import React from 'react';
import { connect } from 'react-redux';
import AddUsers from './AddUsers.jsx';
import { searchUsers } from '../../../actions/searchAction';
import { addUser } from '../../../actions/userAction';

/**
 *
 *
 * @class AddUsersContainier
 * @extends {React.Component}
 */
class AddUsersContainier extends React.Component {
  /**
   * Creates an instance of AddUsersContainier.
   * @param {any} props
   * @memberof AddUsersContainier
   */
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  /**
   *
   *
   * @param {any} event
   * @memberof AddUsersContainier
   */
  handleSearch(event) {
    this.props.searchUsers(event.target.value);
  }

  /**
   *
   *
   * @param {any} event
   * @memberof AddUsersContainier
   */
  handleOnClick(event) {
    const user = {
      userId: event.target.id
    };
    const grp = this.props.group;
    this.props.addUser(grp.id, user);
  }

  /**
   *
   *
   * @returns
   * @memberof AddUsersContainier
   */
  render() {
    return (
      <AddUsers searchResult={this.props.searchResult} handleSearch={this.handleSearch} onClick={this.handleOnClick} />
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchReducer.search,
  group: state.groupReducer.activeGroup
});

export default connect(mapStateToProps, { searchUsers, addUser })(AddUsersContainier);
