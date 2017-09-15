import React from 'react';
import {
  connect
} from 'react-redux';
// import { Link } from 'react-router';
import Groups from './Groups';
import Friends from './Friends';
import { groupAction } from '../actions/groupAction';


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.groupAction(this.state)
      .then((res) => {
        console.log(res);
      });
  }

  render() {
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
          <Groups name="General" />
          <li className="divider"></li>
          <li><a href="#modal2" className="sidebar-text modal-trigger">
            PERSONAL MESSAGES
  <i className="material-icons right sidebar-text" href="#modal2">add_box</i>
          </a>
          </li>
          <Friends />
        </ul>
        <a
          href="hello"
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
                            type="button"
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

        { /* Post message Modal */}
        <div className="container group-container">
          <div className="row">
            <div className="col s12 m8 offset-m2 l9 offset-l3">
              <div id="modal2" className="modal modal-fullscreen">
                <div className="modal-content">
                  <div className="modal-footer">
                    <a
                      href="#"
                      className="modal-action modal-close waves-effect waves-green btn-flat large material-icons"
                    >close
</a> </div> <div className="col s12 m8 offset-m2 l8 offset-l2">
                    <h2> Post a Message </h2> <p> Post a message to everyone in your group </p> <div className="row">
                      <form>
                        <div className="input-field col s12">
                          <input
                            className="validate"
                            type="text"
                            placeholder="e.g Hi"
                            required
                          />
                          <label htmlFor="name"> Message </label>
                        </div>
                        <div className="input-field col s12">
                          <select multiple >
                            <option value="" disabled defaultValue > </option>
                            <option value="1"> Andela </option>
                            <option value="2"> Andela - BootCamp </option>
                            <option value="3"> General </option>
                          </select>
                          <label> Group Name(s) </label>
                        </div> <div className="col l7 offset-l5 button">
                          <button
                            className="btn-large"
                            type="button"
                          >
                            Cancel
                            </button>
                          <button
                            className="btn-large"
                            type="submit"
                            name="action"
                          > Post Message
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

export default connect(null, {
  groupAction
})(SideBar);
