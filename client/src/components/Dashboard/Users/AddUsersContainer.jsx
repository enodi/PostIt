import React from 'react';
import { connect } from 'react-redux';
import AddUsers from './AddUsers.jsx';
import { searchUsers } from '../../../actions/searchAction';

class AddUsersContainier extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.searchUsers(event.target.value);
  }

  handleOnClick(event) {
    
  }

  render() {
    return (
      <AddUsers searchResult={this.props.searchResult} handleSearch={this.handleSearch} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchReducer.search
  };
};

export default connect(mapStateToProps, { searchUsers })(AddUsersContainier);
