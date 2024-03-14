import React, { useState } from "react";
import "./CombinedMenu.css";

export const CombinedMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div id="header" className="header">
      <div className="container">
        <nav>
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <img
              src="assets/nav/closeIcon.png"
              onClick={closeMenu}
              alt=""
              className="close-icon"
            />
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#MyWork">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <img
            src="assets/nav/menuIcon.png"
            onClick={openMenu}
            alt=""
            className={`menu-icon ${isMenuOpen ? "hidden" : ""}`}
          />
        </nav>
      </div>
    </div>
  );
};
