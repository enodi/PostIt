import React, { Component } from 'react';
import { HorizontalBar } from '../navigationComponent/horizontalbar';
import { SideBar } from '../navigationComponent/sidebar';
import { DashBoard } from '../sectionComponent/dashboard';

export class MessageBoard extends Component {
  render() {
    return(
      <div>
        <HorizontalBar />
        <SideBar />
        <DashBoard/>
      </div>
    );
  }
}
