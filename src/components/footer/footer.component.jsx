import React from "react";
import "./footer.styles.scss";

import MessageMe from "../message-me/message-me.component";
import Socials from "../socials/socials.component";

const Footer = () => {
  return (
    <footer className="page-footer">
      <MessageMe />
      <Socials />
    </footer>
  );
};

export default Footer;
