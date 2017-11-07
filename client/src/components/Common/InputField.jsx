import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  name, value, id, type, htmlFor, label, onChange, onBlur, onFocus, placeholder
}) => (
  <div className="input-field col s12" >
    <input
      value={value}
      onChange={onChange}
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      id={id}
      placeholder={placeholder}
    />
    <label htmlFor={htmlFor} > {label} </label>
  </div >
);

InputField.PropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

InputField.defaultProps = {
  type: 'text'
};

export default InputField;
