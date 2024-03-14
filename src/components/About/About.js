import React, { useState } from "react";
import "./About.css";
import Styles from "../IconTest/IconTest.module.css";
import SkillImage from "../Helper-Components/SkillImage";
import skills from "../data/skills.json";

export const About = () => {
  const [toggleState, setToggleState] = useState("skills");

  function openTab(tabName) {
    setToggleState(tabName);
  }

  return (
    <div id="about">
      <div className="outContainer">
        {/* MENU */}
        {/* <div className="navBorder">
          <nav className="nav">
            <ul>
              <li>
                <a href="#header">Home</a>
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
          </nav>
        </div> */}
        {/* MENU */}
        <div className="container">
          <div className="about">
            <div className="row">
              <div className="aboutCol1">
                <img src="../assets/hero/me-gray.png" alt="Me"></img>
              </div>
              <div className="aboutCol2">
                <h1 className="subTitle">About Me</h1>
                <p>
                  As a seasoned Senior Software Engineer and adept
                  Project/Program Manager with over two decades of experience, I
                  am dedicated to delivering client-centric solutions that
                  exceed expectations. My track record includes designing
                  innovative applications and effectively managing projects to
                  achieve high client satisfaction. I am committed to staying at
                  the forefront of technology by continually honing my technical
                  skills and keeping abreast of industry trends. <br />
                  <br />
                  My expertise spans a wide range of areas, including
                  requirement gathering and analysis, architectural design,
                  component development, and interface design for client-server,
                  web-based, workflow, and blockchain applications. I excel in
                  object-oriented analysis and design, ensuring that solutions
                  are not only functional but also scalable and maintainable.{" "}
                  <br />
                  <br />I bring a wealth of experience in database design,
                  end-user training, documentation, and support, ensuring that
                  projects are well-rounded and successful from inception to
                  completion. My comprehensive understanding of the Software
                  Development Lifecycle (SDLC) allows me to navigate complex
                  projects with ease, delivering high-quality results on time
                  and within budget.
                </p>
                <div className="tabTitles">
                  <p
                    className={
                      toggleState === "skills"
                        ? "tabLinks activeLink"
                        : "tabLinks"
                    }
                    onClick={() => openTab("skills")}
                  >
                    Skills
                  </p>
                  <p
                    className={
                      toggleState === "experience"
                        ? "tabLinks activeLink"
                        : "tabLinks"
                    }
                    onClick={() => openTab("experience")}
                  >
                    Experience
                  </p>
                  <p
                    className={
                      toggleState === "education"
                        ? "tabLinks activeLink"
                        : "tabLinks"
                    }
                    onClick={() => openTab("education")}
                  >
                    Education
                  </p>
                  <p
                    className={
                      toggleState === "training"
                        ? "tabLinks activeLink"
                        : "tabLinks"
                    }
                    onClick={() => openTab("training")}
                  >
                    Training & Certifications
                  </p>
                </div>

                <div
                  className={
                    toggleState === "skills"
                      ? "tabContents activeTab"
                      : "tabContents"
                  }
                  id="skills"
                >
                  <ul>
                    <li>
                      <span>Blockchain Technologies</span>
                      <br />
                      Solidity | Hardhat | Ganache | Brownie | Truffle |
                      OpenZeppelin | Infura | Alchemy
                    </li>
                    <li>
                      <span>DApp Development</span>
                      <br />
                      Web3 | JavaScript | Node JS | React JS | Next JS
                    </li>
                    <li>
                      <span>Web App Development</span>
                      <br />
                      HTML | CSS | Bootstrap | AJAX | Material UI | React Icons
                      | ImageKit | SpriteCow | JSON | RESTful API
                    </li>
                    <li>
                      <span>Other Languages</span>
                      <br />
                      Python | C# | Visual Basic | Lotus Notes
                    </li>
                    <li>
                      <span>Databases</span>
                      <br />
                      SQL Server | MySQL | Oracle
                    </li>
                    <li>
                      <span>Other Technologies</span>
                      <br />
                      Anaconda | Jupiter Notebook | Pandas | Dot Net
                    </li>
                    <li>
                      <span>Operating Systems</span>
                      <br />
                      MacOS | Windows | Linux
                    </li>
                  </ul>
                </div>

                <div
                  className={
                    toggleState === "experience"
                      ? "tabContents activeTab"
                      : "tabContents"
                  }
                  id="experience"
                >
                  <ul>
                    <li>
                      <span>Smart Contract Development</span>
                      <br />
                      Ethereum Solidity Based Smart Contracts
                    </li>
                    <li>
                      <span>DApp Development</span>
                      <br />
                      Blockchain Based Distributed Apps
                    </li>
                    <li>
                      <span>Web App Development</span>
                      <br />
                      Responsive E-Commerce Websites
                    </li>
                    <li>
                      <span>UI/UX Development</span>
                      <br />
                      Designing Web/App Landing Pages/interfaces
                    </li>
                  </ul>
                </div>

                <div
                  className={
                    toggleState === "education"
                      ? "tabContents activeTab"
                      : "tabContents"
                  }
                  id="education"
                >
                  <ul>
                    <li>
                      <span>1991</span>
                      <br />
                      Graduate Coursework in MCIS from Cleveland State
                      University
                    </li>
                    <li>
                      <span>1988</span>
                      <br />
                      Graduate Coursework in MBA from King Fahd University of
                      Petroleum & Minerals
                    </li>
                    <li>
                      <span>1983</span>
                      <br />
                      BE in Mechanical Engineering from NED University of
                      Engineering and Technology
                    </li>
                  </ul>
                </div>

                <div
                  className={
                    toggleState === "training"
                      ? "tabContents activeTab"
                      : "tabContents"
                  }
                  id="training"
                >
                  <ul>
                    <li>
                      <span>Blockchain Council</span>
                      <br />
                      Certified Blockchain Architect
                    </li>
                    <li>
                      <span>Blockchain Council</span>
                      <br />
                      Certified Ethereum Developer
                    </li>
                    <li>
                      <span>Brainnest</span>
                      <br />
                      Blockchain Developer Internship
                    </li>
                    <li>
                      <span>Dapp University</span>
                      <br />
                      Blockchain Bootcamp
                    </li>
                    <li>
                      <span>IBM</span>
                      <br />
                      Python for Data Science
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* New Code */}
          <div className={Styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={Styles.skill}>
                  <div className={Styles.skillImageContainer}>
                    <SkillImage imageSrc={skill.imageSrc} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
          {/* New Code */}
        </div>
      </div>
    </div>
  );
};
