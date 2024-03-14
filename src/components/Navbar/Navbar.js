import React from "react";
import Styles from "./Navbar.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div id="navBar">
      <div className={Styles.container}>
        {/* <div className={Styles.row}> */}
        {/* <div className={Styles.navCol1}></div> */}
        {/* <div className={Styles.navCol2}> */}
        {/* <nav className={Styles.nav}>
          <img
            className={Styles.menuBtn}
            src={
              menuOpen
                ? "/assets/nav/closeIcon.png"
                : "/assets/nav/menuIcon.png"
            }
            onClick={() => setMenuOpen(!menuOpen)}
            alt="menu-button"
          />
          <ul
            className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <img
                src="/assets/nav/closeIcon.png"
                className={Styles.crossPosition}
                alt=""
              />
            </li>
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
          <i></i>
        </nav> */}
        {/* New Code */}
        {/* <div className="container">
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
          <div className="header-text">
            <p>Blockchain/DApp/Web Developer</p>
            <h1>
              Hi, I'm <span>Faruk</span> Ansari From USA
            </h1>
          </div>
        </div> */}
        {/* New Code */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};
