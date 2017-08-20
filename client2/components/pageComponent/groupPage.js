import React, { Component } from 'react';
import { HorizontalBar } from '../navigationComponent/horizontalbar';
import { SideBar } from '../navigationComponent/sidebar';
import { Group } from '../sectionComponent/group';

export class GroupPage extends Component {
  render() {
    return(
      <div>
        <HorizontalBar />
        <SideBar />
        <Group/>
      </div>
    );
  }
}
