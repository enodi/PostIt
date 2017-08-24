import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange,
  placeholder, value, error, type="text"}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += '' + 'has-error';
  }

  return(
    <div className={wrapperClass}>
      <div className="row signin">
        <div className="input-field col s12">
          <input
            className="validate"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required />
          <label htmlFor="username">{label}</label>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
