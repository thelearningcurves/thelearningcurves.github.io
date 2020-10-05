import React from "react";
import "./header.styles.scss";

import Menu from "../menu/menu.component";
export const HeaderItems = ({ menuOpen }) => {
  return (
    <ul className="header-items" style={{ display: menuOpen }}>
      <li>
        <a href="https://thelearningcurves.github.io/my_blog"> My Blog </a>
      </li>
      <li>
        <a href="https://google.com"> Inversion</a>
      </li>
      <li>
        <a href="https://google.com"> Migration</a>
      </li>
      <li>
        <a href="https://google.com"> Geophysics </a>
      </li>
      <li>
        <a href="https://google.com"> ML/DL </a>
      </li>
      <li>
        <a href="https://google.com"> Bayesian </a>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <header className="page-header">
      <Menu />
    </header>
  );
};

export default Header;
