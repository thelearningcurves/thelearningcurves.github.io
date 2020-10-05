import React from "react";
import "./menu.styles.scss";

import { HeaderItems } from "../header/header.component";

const Menu = ({ isOpen }) => {
  return <button onClick={() => alert("Open Menu")} className="menu-open" />;
};

export default Menu;
