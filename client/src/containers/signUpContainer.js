import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignUpContainer extends React.Component {
  render(){
    return(
      <ul>
        <li>one</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SignUpContainer);
