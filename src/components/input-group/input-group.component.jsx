import React from "react";
import "./input-group.styles.scss";

const InputGroup = ({ type, label, id, name, handleChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} onChange={handleChange} required />
    </div>
  );
};

export default InputGroup;
