import React, { Component } from 'react';
import { HorizontalBar } from '../navigationComponent/horizontalbar';
import { SideBar } from '../navigationComponent/sidebar';
import { MessageSection } from '../sectionComponent/messageSection';

export class PostMessagePage extends Component {
  render() {
    return(
      <div>
        <HorizontalBar />
        <SideBar />
        <MessageSection/>
      </div>
    );
  }
}
