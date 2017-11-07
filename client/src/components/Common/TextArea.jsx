import React from 'react';

const TextArea = ({ name, id, value, label, placeholder, htmlFor }) => (
  <div className="input-field col s12">
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}></textarea>
    <label htmlFor={htmlFor}>{label}</label>
  </div>
);

export default TextArea;
