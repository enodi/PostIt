import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({field, value, label, type, onChange}) => {
  return(
    <div className="row signup">
      <div className="input-field col s12">
        <input
          value={value}
          onChange={onChange}
          className="validate"
          type={type}
          name={field} required/>
        <label htmlFor="username">{label}</label>
      </div>
    </div>
  );
}

TextField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextField.defaultProps = {
  type: 'text'
}

export default TextField;
