import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../Common/InputField.jsx';

const PostMessage = props => (
  <div className="container post-message">
    <div className="row">
      <form onSubmit={props.handleOnSubmit}>
        <div className="input-field col l11 offset-l1">
          <div className="card-panel">
            <InputField
              className="autocomplete"
              type={'text'}
              name={'messsage'}
              value={props.state.message}
              onChange={props.handleOnChange}
              label={'Message'}
              htmlFor={'message'}
              required />
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
          <button
            className="btn-large right"
            type="submit"
            name="action">
            Post Message
          </button>
          </div>
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
