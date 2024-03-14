import React, { useState } from "react";
import "./WorkingSideMenu.css";

export const WorkingSideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="containerSide">
      <nav>
        <ul className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <img
            src="assets/nav/closeIcon.png"
            onClick={closeMenu}
            alt=""
            className="close-icon"
            style={{ display: isMenuOpen ? "block" : "none" }}
          ></img>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <img
          src="assets/nav/menuIcon.png"
          onClick={openMenu}
          alt=""
          className="menu-icon"
          style={{ display: isMenuOpen ? "none" : "block" }}
        ></img>
      </nav>
    </div>
  );
};
