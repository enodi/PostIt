import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Notifications, {notify} from 'react-notify-toast';
import DashBoard from './Dashboard';
import SideBar from './SideBar';
import { createGroup } from '../actions/groupAction';
// import { removeSignUpMessage } from '../actions/auth/signupAction';

const activities = [
    {
      user: {
        name: 'Xerxes',
        img: require("../assets/images/pic.jpg"),
        text: 'Hello. Feivel you did not send the document to me yesterday'
      }
    },
    {
      user: {
        name: 'Feivel',
        img: require("../assets/images/pic1.jpg"),
        text: 'Sorry I will do that right away.'
      }
    },
    {
      user: {
        name: 'Adiel',
        img: require("../assets/images/pic2.jpg"),
        text: 'When is the meeting holding'
      }
    },
    {
      user: {
        name: 'Ariella',
        img: require("../assets/images/pic3.jpg"),
        text: 'Tomorrow'
      }
    }
]

class MessageBoard extends React.Component {
  // componentDidMount() {
  //   const myColour = { background: '#2979FF', text: '#ffffff' };
  //   if (this.props.signedUp) {
  //     notify.show('SignUp Successful', "custom", 4000, myColour);
  //     this.props.removeSignUpMessage();
  //   }
  // }
  render() {
    return(
      <div>
        {/*<Notifications />*/}
        <SideBar createGroup={createGroup} />
        <DashBoard activities={activities} />
      </div>
    );
  }
}

MessageBoard.propTypes = {
  createGroup: PropTypes.func.isRequired
}

// const mapStateToProps = (state) => ({
//   signedUp: state.currentUser.signedUp,
// })

export default connect(null, { createGroup })(MessageBoard);
