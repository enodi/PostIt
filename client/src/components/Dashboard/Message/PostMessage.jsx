import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../../Common/InputField.jsx';

/**
 * Gives the presentational view for postMessage component
 *
 * @param {object} props
 *
 * @returns {void}
 */
const PostMessage = props => (
  <div className="post-message">
    <div className="panel white">
      <form onSubmit={props.handleOnSubmit}>
        <div className="col m9">
          <div className="input-border">
            <InputField
              className="autocomplete post-message"
              type={'text'}
              name={'message'}
              value={props.state.message}
              onChange={props.handleOnChange}
              placeholder={'Type a message'}
              required/>
          </div>
          <p>
            <input
              className="with-gap"
              type="radio"
              id="normal"
              checked={props.state.priority === 'normal'}
              onChange={props.priorityOnChange} />
            <label htmlFor="normal">Normal</label>

            <input
              className="with-gap"
              type="radio"
              id="urgent"
              checked={props.state.priority === 'urgent'}
              onChange={props.priorityOnChange} />
            <label htmlFor="urgent">Urgent</label>

            <input
              className="with-gap"
              type="radio"
              id="critical"
              checked={props.state.priority === 'critical'}
              onChange={props.priorityOnChange} />
            <label htmlFor="critical">Critical</label>
          </p>
        </div>
      </form>
    </div>
  </div>
);

PostMessage.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default PostMessage;
