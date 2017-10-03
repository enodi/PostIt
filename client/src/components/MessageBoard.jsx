import React from 'react';
import {
  connect
} from 'react-redux';
import SideBar from './SideBar';
import DashBoard from './DashBoard';
import { messageAction } from '../actions/messageAction';

class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: 'normal',
      message: ''

    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.priorityOnChange = this.priorityOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  priorityOnChange(e) {
    this.setState({
      priority: e.target.id
    });
  }

  handleOnChange(e) {
    this.setState({
     [e.target.name]: e.target.value,
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { activeGroup } = this.props.groupReducer;
    this.props.messageAction(activeGroup.id, this.state);
  }

  render() {
    const { groupMessages } = this.props.messageReducer;
    return(
      <div>
        <SideBar />
        <DashBoard messages={groupMessages} />
        <div className="fixed-action-btn vertical">
        <a className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li>
            <a className="btn-floating red">
              <i className="material-icons modal-trigger" data-target="message-modal">message</i>
            </a>
          </li>
          <li>
            <a className="btn-floating green">
              <i className="material-icons modal-trigger" data-target="users-modal">people</i>
            </a>
          </li>
        </ul>
        </div>

        {/*Message Modal*/}
        <div id="message-modal" className="modal">
          <div className="modal-content">
            <div className="modal-footer">
              <a
                href="#"
                className="modal-action modal-close waves-effect waves-green btn-flat large material-icons"
              >close
              </a>
            </div>
            <div className="col s12">
              <h4 className="center">Post a Message </h4>
              <p className="center">Post a message to everyone in your group </p>
              <form onSubmit={this.handleOnSubmit}>
                <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <input 
                      type="text" 
                      name="message"
                      value={this.state.message}
                      onChange={this.handleOnChange}
                      placeholder="Message"
                      id="autocomplete-input" 
                      className="autocomplete"
                     />
                
                  <p>
                    <input 
                      className="with-gap" 
                      type="radio" 
                      id="normal" 
                      checked={this.state.priority==='normal'}
                      onChange={this.priorityOnChange} />
                    <label htmlFor="normal">Normal</label>

                    <input 
                      className="with-gap"  
                      type="radio" 
                      id="urgent"
                      checked={this.state.priority==='urgent'}
                      onChange={this.priorityOnChange} />
                    <label htmlFor="urgent">Urgent</label>

                    <input 
                      className="with-gap" 
                      type="radio" 
                      id="critical"
                      checked={this.state.priority==='critical'}
                      onChange={this.priorityOnChange} />
                    <label htmlFor="critical">Critical</label>
                  </p>
                </div>
                <div className="col l7 offset-l5 button">
                  <button
                    className="btn-large right"
                    type="submit"
                    name="action"
                  >
                    Post Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/*Users Modal*/}
        <div id="users-modal" className="modal">
          <div className="modal-content">
            <div className="modal-footer">
              <a
                href="#"
                className="modal-action modal-close waves-effect waves-green btn-flat large material-icons"
              >close
              </a>
            </div>
            <div className="col s12">
              <h4 className="center">Add Users to a Group</h4>
              <div className="row" id="topbarsearch">
                <div className="input-field col s6 s12 li">
                  <i className="material-icons prefix">search</i>
                  <input type="text" placeholder="Search..." id="autocomplete-input" className="autocomplete red-text" />
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
    groupReducer: state.groupReducer,
    messageReducer: state.messageReducer
  }
}

export default connect(mapStateToProps, { messageAction })(MessageBoard);
