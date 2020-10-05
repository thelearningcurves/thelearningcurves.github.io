import React from "react";
import "./header.styles.scss";

import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedin.svg";
import { ReactComponent as KaggleLogo } from "../../assets/kaggle.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";
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
      <ul className="header-links">
        <li>
          <a href="https://github.com/thelearningcurves">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thefatbuddha_">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shobhit-mishra-479997148/">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/pyrtdx">
            <KaggleLogo />
          </a>
        </li>
      </ul>
      <Menu />
    </header>
  );
};

export default Header;
