import React from "react";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="page-header">
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
    </header>
  );
};

export default Header;
