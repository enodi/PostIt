import React from 'react';
import SideBar from './SideBar';

class MessageBoard extends React.Component {
  render() {
    return(
      <div>
        <SideBar />
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
              <form>
                <div className="input-field col s12">
                  <textarea className="materialize-textarea"></textarea>
                  <label htmlFor="name"> Message</label>
                </div>

                <div>
                  <p>
                    <input className="with-gap" name="normal" type="radio" id="normal" checked />
                    <label htmlFor="normal">Normal</label>

                    <input className="with-gap" name="normal" type="radio" id="urgent"/>
                    <label htmlFor="urgent">Urgent</label>

                    <input className="with-gap" name="normal" type="radio" id="critical"/>
                    <label htmlFor="critical">Critical</label>
                  </p>
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

export default MessageBoard;
