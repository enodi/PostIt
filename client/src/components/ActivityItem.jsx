import React from 'react';

export default class ActivityItem extends React.Component {
  render() {
    const { activity } = this.props;
    return (
      <div className="col s12 m8 offset-m2 l9 offset-l3">
        <div className="card-panel z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s1">
              <img src={activity.user.img} alt="" className="circle responsive-img" />
            </div>
            <div className="col s11">
              <b><p>{activity.user.name}</p></b>
              <p className="black-text">
                {activity.user.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
