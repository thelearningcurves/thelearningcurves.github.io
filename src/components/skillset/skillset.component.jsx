import React from "react";
import "./skillset.styles.scss";

import { ReactComponent as Skills } from "../../assets/skills.svg";

const Skillset = () => {
  return (
    <div className="skillset">
      <div className="skillset-title">
        <Skills />
        <h1>Skillset</h1>
      </div>
      <ul>
        <li>Digital Signal Processing</li>
        <li>Seismic Data Processing</li>
        <li>Inversion[Model Estimation]</li>
        <li>Migration</li>
        <li>Machine Learning</li>
        <li>Numerical Modelling</li>
      </ul>
    </div>
  );
};

export default Skillset;
