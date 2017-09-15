import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import DashBoard from './Dashboard';
import SideBar from './SideBar';
// import { createGroup } from '../actions/groupAction';

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
  render() {
    return(
      <div>
        <SideBar />
        <DashBoard activities={activities} />
      </div>
    );
  }
}

export default MessageBoard;
