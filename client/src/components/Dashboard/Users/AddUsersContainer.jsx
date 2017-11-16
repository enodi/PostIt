import React from 'react';
import { connect } from 'react-redux';
import AddUsers from './AddUsers.jsx';
import { searchUsers } from '../../../actions/searchAction';
import { addUser } from '../../../actions/userAction';

/**
 * This class is the container component for add
 * users component
 *
 * @class AddUsersContainier
 * @extends {React.Component}
 */
export class AddUsersContainer extends React.Component {
  /**
   * Creates an instance of AddUsersContainier.
   * Initializes the state and binds this to the methods in the class
   *
   * @param {object} props
   *
   * @memberof AddUsersContainier
   */
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      offset: 0,
      query: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  /**
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof AddUsersContainier
   */
  handleSearch() {
    const {
      offset,
      limit,
      query
    } = this.state;
    if (query.trim()) {
      this.props.searchUsers(query.trim(), offset, limit);
    }
  }

  /**
   * Takes in the target object and sets the state with
   * the form input
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof AddUsersContainier
   */
  onChange(event) {
    this.setState({
      query: event.target.value
    }, () => this.handleSearch());
  }

  /**
   * Takes in the target object of the onclick event
   * and add new users to the selected group
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof AddUsersContainier
   * @method handleOnClick
   */
  handleOnClick(event) {
    const user = {
      userId: event.target.id
    };
    const grp = this.props.group;
    this.props.addUser(grp.id, user);
  }

  /**
   * Takes in the target object of the onclick event
   * and displays users based on the offset set
   *
   * @param {object} data
   *
   * @return {void}
   *
   * @memberof AddUsersContainier
   * @method handlePageClick
   */
  handlePageClick(data) {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.state.limit);
    this.setState({
      offset
    }, () => {
      this.handleSearch();
    });
  }

  /**
  * @returns {jsx} an xml/html like syntax extension for
  * javascript
  *
  * @memberof AddUsersContainier
  */
  render() {
    return (
      <AddUsers
      searchResult={this.props.searchResult}
      onChange={this.onChange}
      limit = {this.state.limit}
      onClick={this.handleOnClick}
      handlePageClick={this.handlePageClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchReducer.search,
  group: state.groupReducer.activeGroup
});

export default connect(mapStateToProps, { searchUsers, addUser })(AddUsersContainer);
