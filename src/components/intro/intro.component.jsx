import React from "react";
import "./intro.styles.scss";

import { ReactComponent as ProfilePic } from "../../assets/profile-pic-temp.svg";
const Intro = () => {
  return (
    <div className="intro">
      <ProfilePic />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          molestiae vitae explicabo alias, corporis ex fuga necessitatibus quam
          ipsa fugiat consequuntur ipsam tempora est repellendus culpa, minus
          facilis itaque pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          molestiae vitae explicabo alias, corporis ex fuga necessitatibus quam
          ipsa fugiat consequuntur ipsam tempora est repellendus culpa, minus
          facilis itaque pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          molestiae vitae explicabo alias, corporis ex fuga necessitatibus quam
          ipsa fugiat consequuntur ipsam tempora est repellendus culpa, minus
          facilis itaque pariatur.
        </p>
      </div>
    </div>
  );
};

export default Intro;
