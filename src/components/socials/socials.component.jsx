import React from "react";
import "./socials.styles.scss";

import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Kaggle } from "../../assets/kaggle.svg";

const Socials = () => {
  return (
    <ul className="socials">
      <li>
        <a href="https://google.com">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/the.fat_buddha/">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/thefatbuddha_">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.kaggle.com/pyrtdx">
          <Kaggle />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
