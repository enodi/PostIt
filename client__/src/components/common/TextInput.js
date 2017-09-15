import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          name={name}
          className="validate"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
      </div>
      <label htmlFor={name}>{label}</label>
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
