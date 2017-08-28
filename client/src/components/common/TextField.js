import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({field, value, label, error, type, onChange}) => {
  return(
    <div className="row signup">
      <div className="input-field col s12">
        <input
          value={value}
          onChange={onChange}
          className="validate"
          type={type}
          name={field} />
        <label htmlFor="username">{label}</label>
        {error && <span className="help-block">{error}</span>}
      </div>
    </div>
  );
}

TextField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextField.defaultProps = {
  type: 'text'
}

export default TextField;
