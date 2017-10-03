import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default class SearchDropDown extends Component {
  render() {
    console.log(this.props.data, 'yo');
      if (true) {
        return(
          <div>
            <ul>
              {this.props.data.map((value, i) => <li key={i}><Link to="#">{value.username}</Link></li>)}
            </ul>
          </div>
        )
      } else {
        return(
          <div></div>
        );
      }
  }
}

SearchDropDown.propTypes = {
  data: PropTypes.array,
}
