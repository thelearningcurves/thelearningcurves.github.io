import React from "react";
import "./input-group.styles.scss";

const InputGroup = ({ type, label, id, name, value, handleChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputGroup;
