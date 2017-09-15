import React from 'react';
import ActivityItem from './ActivityItem';
import '../assets/main.css';

export default class DashBoard extends React.Component {
  render() {
    const {activities} = this.props;
    return(
      <div className="row">
        {activities.map((activity, i) => (
          <ActivityItem activity={activity} key={i} />
        ))}
      </div>
    );
  }
}
