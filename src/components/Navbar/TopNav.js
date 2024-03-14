import React from "react";
import "./TopNav.css";

export const TopNav = () => {
  return (
    <div id="header">
      <div className="containerTop">
        <nav className="nav">
          <ul id="topmenu">
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
        </nav>
      </div>
    </div>
  );
};
