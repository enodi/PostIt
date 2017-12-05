import React from 'react';
import ReactPaginate from 'react-paginate';

/**
 * Gives the presentational view for AddUsers component
 *
 * @param {object} props
 *
 * @returns {void}
 */
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
            <input onChange={props.onChange}
            type="text" placeholder="Search..." name="search"
            id="autocomplete-input" className="autocomplete black-text" />
          </div>
        </div>
      </div>
      <div className="container add-user">
          {props.searchResult.rows &&
            props.searchResult.rows.map(user =>
              <div key={user.id} className="row">
            <div className="col m10">
              <p>{user.username}</p>
            </div>
            <div className="col m2">
              <div className="button-border">
                <button id={user.id}
                onClick={props.onClick}
                className="btn-large right addUsersBtn"
                type="submit" name="action">
                  add
                </button>
              </div>
            </div>
          </div>)}
      </div>
      <div className="center">
        <ReactPaginate
          pageCount={Math.ceil(props.searchResult.count / props.limit)}
          marginPagesDisplayed={0}
          pageRangeDisplayed={0}
          previousLabel={'prev'}
          nextLabel={'next'}
          onPageChange={props.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          />
      </div>
    </div>
  </div>
);

export default AddUsers;
