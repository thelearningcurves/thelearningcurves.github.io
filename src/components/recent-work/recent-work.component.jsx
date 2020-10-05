import React from "react";
import "./recent-work.styles.scss";

const RecentWork = () => {
  return (
    <div className="recent-work">
      <h1>Recent Work</h1>
      <ul className="socials">
        <li>
          <a href="https://github.com/thelearningcurves">Github</a>
        </li>
        <li>
          <a href="https://thelearningcurves.github.io/my_blog/">Blog</a>
        </li>
        <li>
          <a href="https://thelearningcurves.github.io/my_blog/shop/">SHOP</a>
        </li>
      </ul>
    </div>
  );
};

export default RecentWork;
