import React from "react";
import "./menu.styles.scss";

import { HeaderItems } from "../header/header.component";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
const Menu = ({ isOpen }) => {
  return (
    <button onClick={() => alert("OPe Menu")} className="menu-open"></button>
  );
};

export default Menu;
