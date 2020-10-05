import React from "react";
import "./footer.styles.scss";

import MessageMe from "../message-me/message-me.component";
import RecentWork from "../recent-work/recent-work.component";

const Footer = () => {
  return (
    <footer className="page-footer">
      <MessageMe />
      <RecentWork />
    </footer>
  );
};

export default Footer;
