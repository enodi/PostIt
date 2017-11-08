import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar.jsx';
import PostMessageContainer from './Message/PostMessageContainer.jsx';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        { this.props.groups.activeGroup.id && <PostMessageContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groupReducer
  };
};

export default connect(mapStateToProps)(Dashboard);
