import React, { Component } from 'react';
import { DropDown } from './dropdown';
import { Search } from './search';
import '../../assets/scripts.js';

export class HorizontalBar extends Component {
  render() {
    return(
      <nav className="white dashboard">
        <DropDown />
        <Search />
      </nav>
    );
  }
}
