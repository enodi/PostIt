import React from 'react';
import AuthHeader from './AuthHeader';
import SideBar from './SideBar';
import DashBoard from './Dashboard';

// const moment1 = {
//   user: {
//     name: 'Xerxes',
//     img: require("../../assets/images/pic.jpg"),
//     text: 'Hello. Feivel you did not send the document to me yesterday'
//   }
// }
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

export default class MessageBoard extends React.Component {
  render() {
    return(
      <div>
        <AuthHeader />
        <SideBar />
        <DashBoard activities={activities} />
      </div>
    );
  }
}
