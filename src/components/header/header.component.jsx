import React, { useEffect, useState } from "react";
import "./header.styles.scss";

import Menu from "../menu/menu.component";
export const HeaderItems = ({ isMobile }) => {
  return (
    <ul>
      <li>
        <a href="https://thelearningcurves.github.io/my_blog"> My Blog</a>
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
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  return (
    <header className="page-header">
      <HeaderItems />
      <Menu />
    </header>
  );
};

export default Header;
