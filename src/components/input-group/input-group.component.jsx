import React from "react";
import "./input-group.styles.scss";

const InputGroup = ({ type, label, id }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} required />
    </div>
  );
};

export default InputGroup;
