import React from 'react';

const AddUsers = props => (
  <div>
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
            <input onChange={props.handleSearch} type="text" placeholder="Search..." id="autocomplete-input" className="autocomplete black-text" />
          </div>
        </div>
      </div>
      <div className="container add-user">
          {props.searchResult && props.searchResult.map(user => <div key={user.id} className="row">
            <div className="col m10">
              <p>{user.username}</p>
            </div>
            <div className="col m2">
              <div className="button-border">
                <button id={user.id} onClick={props.onClick} className="btn-large right" type="submit" name="action">
                  add
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  </div>
);

export default AddUsers;
