import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../Common/InputField.jsx';
import GroupList from './GroupList.jsx';

/**
 * Gives the presentational view for group component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const Group = props => (
  <div>
    <ul className="side-nav fixed" id="slide-out">
      <li className="brand-logo logo-text">PostIt
        <i className="small material-icons white-text" onClick={props.handleOnClick}>
        input
        </i>
      </li>
      <li className="divider"></li>
      <div className="li">
        <li>
          <a href="#modal1" className="sidebar-text modal-trigger">
            GROUPS
            <i className="material-icons right sidebar-text" href="#modal1">add_box</i>
          </a>
        </li>
        {props.groups && props.groups.map(group => <GroupList
          group={group}
          active={props.active}
          activeGroup={props.activeGroup}
          key={group.id}
          />)}
      </div>
    </ul>
    <div className="container group-container">
      <div className="row">
        <div className="col s12 m8 offset-m2 l9 offset-l3">
          <div id="modal1" className="modal modal-fullscreen">
            <div className="modal-content">
              <div className="modal-footer">
                <a href="#!"
                  className="modal-action modal-close waves-effect waves-green btn-flat large material-icons"
                >close
                </a>
              </div>
              <div className="col s12 m8 offset-m2 l8 offset-l2">
                <h2> Create a Group </h2>
                <p>
                Start a conversation with your friends by creating a group
                </p>
                <div className="row">
                  <form name="add_group" onSubmit={props.onSubmit}>
                    <div className="input-field col s12">
                      <InputField
                        className="validate"
                        onChange={props.handleOnChange}
                        type={'text'}
                        name={'name'}
                        value={props.state.name}
                        htmlFor={'name'}
                        label={'Group Name'}
                        required />
                    </div>
                    <div className="input-field col s12">
                      <InputField
                        className="validate"
                        onChange={props.handleOnChange}
                        type={'text'}
                        name={'description'}
                        value={props.state.description}
                        htmlFor={'description'}
                        label={'Description'}
                        required />
                    </div>
                    <div className="col l7 offset-l5 button">
                      <button className="btn-large" type="reset">
                        Cancel
                      </button>
                      <button
                        className="btn-large"
                        type="submit"
                        name="action">
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

Group.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Group;
