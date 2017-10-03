import React from 'react';
import {
  connect
} from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import Groups from './Groups';
import { groupAction, retrieveGroups, activeGroup } from '../actions/groupAction';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleActiveGroup = this.handleActiveGroup.bind(this);
  }

  componentDidMount() {
    $('.modal').modal();
    const { user } = this.props.currentUser
    // Retrieve all groups a user belongs to
    this.props.retrieveGroups(user.userId)
  }

  onSubmit(e) {
    const color = { background: '#448AFF', text: '#FFFFFF' };
    const myColor = { background: '#C62828', text: '#FFFFFF' };
    e.preventDefault();
    this.props.groupAction(this.state)
      .then((res) => {
        if (res.status === 201) {
          notify.show(res.data.message, 'custom', 3000, color);
        } else {
          notify.show(res, 'custom', 3000, myColor);
        }
      })
      .catch((error) => {
        return error;
      });
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleActiveGroup(e) {
    e.preventDefault();
    this.props.activeGroup({name: e.target.name, id: e.target.id});
    
  }

  render() {
    const { userGroups } = this.props.groups
    return (
      <div>
        <ul className="side-nav fixed" id="slide-out">
          <li className="brand-logo logo-text"> PostIt </li>
          <li className="divider"></li>
          <li>
            <a href="#modal1" className="sidebar-text modal-trigger">
              GROUPS
              <i className="material-icons right sidebar-text" href="#modal1">add_box</i>
            </a>
          </li>
          <Groups {...userGroups} 
          onActiveGroup = {this.handleActiveGroup} />
        </ul>
        <a
          href="#"
          data-activates="slide-out"
          className="button-collapse"
        >
          <i className="material-icons">menu</i>
        </a>

        {/* Create group Modal */}
        <div className="container group-container">
          <div className="row">
            <div className="col s12 m8 offset-m2 l9 offset-l3">

              { /* Modal Structure */}
              <div id="modal1" className="modal modal-fullscreen">
                <div className="modal-content">
                  <div className="modal-footer">
                    <a
                      href="#!"
                      className="modal-action modal-close waves-effect waves-green btn-flat large material-icons"
                    >close
                    </a>
                  </div>
                  <Notifications />
                  <div className="col s12 m8 offset-m2 l8 offset-l2">
                    <h2> Create a Group </h2>
                    <p> Start a conversation with your friends by creating a group </p>
                    <div className="row">
                      <form name="add_group" onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                          <input
                            className="validate"
                            onChange={this.handleOnChange}
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="e.g Andela"
                            required
                          />
                          <label htmlFor="name">Group Name</label>
                        </div>
                        <div className="input-field col s12">
                          <input
                            className="validate"
                            onChange={this.handleOnChange}
                            type="text"
                            name="description"
                            value={this.state.description}
                            placeholder="Channel for fellows"
                          />
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="col l7 offset-l5 button">
                          <button
                            className="btn-large"
                            type="reset"
                          >
                            Cancel
                          </button>
                          <button
                            className="btn-large"
                            type="submit"
                            name="action"
                          >
                            Create Group
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
    
const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducer,
    groups: state.groupReducer
  }
}

export default connect(mapStateToProps, {
  groupAction,
  retrieveGroups,
  activeGroup
})(SideBar);
