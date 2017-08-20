import React from 'react';
import HttpService from '../../services/HttpService';
import '../../assets/main.scss';

const http = new HttpService();

export default class Groups extends React.Component {
  constructor(props) {
    super(props);
    http.getGroups();
  }
  render() {
    return(
      <div>
        <li><a href="#" className="sidebar-text">{this.props.name}</a></li>
        {/*<li><a href="#" className="sidebar-text">Andela-BootCamp</a></li>
        <li><a href="#" className="sidebar-text">Andela</a></li>*/}
      </div>
    );
  }
}
