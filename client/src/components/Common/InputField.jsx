import React from 'react';
import PropTypes from 'prop-types';


/**
 * A reusable component for input fields
 *
 * @param {object} props - destructured
 *
 * @returns {void}
 */
const InputField = ({
  name, value, id, type, htmlFor, label, onChange, onBlur, onFocus, placeholder, className
}) => (
  <span>
    <input
      value={value}
      onChange={onChange}
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
    />
    <label htmlFor={htmlFor} > {label} </label>
  </span>
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
