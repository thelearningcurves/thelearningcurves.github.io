import React from "react";
import "./tools.styles.scss";

import { ReactComponent as Tools } from "../../assets/tools.svg";
// import { ReactComponent as ToolsNew } from "../../assets/tools-new.svg";

const Tool = () => {
  return (
    <div className="tools">
      <div className="tools-title">
        <Tools />
        {/* <ToolsNew /> */}
        <h1>Tools</h1>
      </div>
      <ul className="tools-list">
        <li>Python</li>
        <li>
          ML library
          <ol>
            <li>scikit-learn</li>
            <li>yellowbrick</li>
          </ol>
        </li>
        <li>
          DL library
          <ol>
            <li>Tensorflow</li>
            <li>Keras</li>
          </ol>
        </li>
        <li>
          <a href="https://devitoproject.org">Devito </a>[Domain Specific
          Language]
        </li>
        <li>
          Visualization
          <ol>
            <li>Matplotlib</li>
            <li>Seaborn</li>
          </ol>
        </li>
        <li>FINITE element methods</li>
        <li>Seismic Unix</li>
        <li>SEISAN</li>
        <li>Git</li>
        <li>QGIS</li>
      </ul>
    </div>
  );
};

export default Tool;
