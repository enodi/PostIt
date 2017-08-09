import React from 'react';
import AuthHeader from './AuthHeader';
import SideBar from './SideBar';
import DashBoard from './DashBoard';

export default class MessageBoard extends React.Component {
  render() {
    return(
      <div>
        <AuthHeader />
        <SideBar />
        <DashBoard />
      </div>
    );
  }
}
