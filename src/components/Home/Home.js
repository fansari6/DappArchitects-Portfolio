import React from "react";
import Styles from "./Home.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  // var sidemenu = document.getElementById("sideMenu");

  // function openMenu() {
  //   sidemenu.Styles.right = "0px";
  // }

  // function closeMenu() {
  //   sidemenu.Styles.right = "-200px";
  // }
  return (
    <div id="home">
      <div className={Styles.container}>
        {/* Added */}
        <div className={Styles.row}>
          <div className={Styles.navCol1}>
            {/* <nav className={Styles.nav}>
              <img
                src="../assets/logo/full-ethereum-logo.png"
                className={Styles.logo}
                alt="Logo"
              />
            </nav> */}
          </div>
          <div className={Styles.navCol2}>
            <nav className={Styles.nav}>
              <img
                src="../assets/logo/full-ethereum-logo.png"
                className={Styles.logo}
                alt="Logo"
              />
            </nav>
            {/* <nav className={Styles.nav}>
              <ul id="sideMenu">
                <li>
                  <a href="#header">Home</a>
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
                <i>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={Styles.faIconClose}
                    onClick={closeMenu}
                  ></FontAwesomeIcon>
                </i>
              </ul>
              <i>
                <FontAwesomeIcon
                  icon={faBars}
                  className={Styles.faIconOpen}
                  onClick={openMenu}
                ></FontAwesomeIcon>
              </i>
            </nav> */}
          </div>
        </div>
        {/* Addedd */}
        <div className={Styles.homeText}>
          <h1>
            Hi, I'm <span>Faruk</span> Ansari <br />
          </h1>
          <p>
            I'm a Blockchain Smart Contract/DApp <br />
            and Web Developer
          </p>
        </div>
      </div>
    </div>
  );
};
