import React from "react";
import "./tools.styles.scss";

const Tool = () => {
  return (
    <div className="tools">
      <div className="tools-title">Tool</div>
      <ul>
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
          <a href="https://devitoproject.org">Devito</a>[Domain Specific
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
