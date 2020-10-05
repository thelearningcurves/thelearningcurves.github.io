import React, { useState, useEffect } from "react";
import "./menu.styles.scss";

import { HeaderItems } from "../header/header.component";

const Menu = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(() => {
    if (width > 800) return "block";
    return "none";
  });
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
      if (width > 800) setMenuOpen("block");
      else setMenuOpen("none");
      console.log(width);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  return (
    <>
      <button
        onClick={() =>
          setMenuOpen((prev) => (prev === "none" ? "block" : "none"))
        }
        className="menu-open"
      />
      <HeaderItems menuOpen={menuOpen} />
    </>
  );
};

export default Menu;
