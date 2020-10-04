import React, { useEffect, useState } from "react";
import "./header.styles.scss";

import Menu from "../menu/menu.component";
const HeaderItems = () => {
  return (
    <ul>
      <li>
        <a href="https://google.com"> Header 1</a>
      </li>
      <li>
        <a href="https://google.com"> Header 2</a>
      </li>
      <li>
        <a href="https://google.com"> Migration</a>
      </li>
      <li>
        <a href="https://google.com"> DL/ML</a>
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
