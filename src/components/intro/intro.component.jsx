import React from "react";
import "./intro.styles.scss";

// import { ReactComponent as ProfilePic } from "../../assets/profile-pic-temp.svg";
const Intro = () => {
  return (
    <div className="intro">
      {/* <ProfilePic /> */}
      <div className="profile-pic" />
      <div>
        <p>
          Hello! I am Shobhit,
           a data-driven geophysicist focused on implementing Machine Learning
          to solve the inverse geophysical problems. 
          
          
        </p>
        <p>
          When I am not thinking about ML, I like to read novels, nowadays mostly by
          russian novelist or re-reading a Murakami.
        </p>
        <p>
          I am looking for cool projects that images earth's sub-surface. I am
          always willing to learn about new domain and often take it as a challenge.
          
        </p>
      </div>
    </div>
  );
};

export default Intro;
