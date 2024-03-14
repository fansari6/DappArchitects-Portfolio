import React from "react";
import Styles from "./Projects.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";
// import skills from "../data/skills.json";
// import history from "../data/history.json";
// import SkillImage from "../../SkillImage";
// import HistoryImage from "../../HistoryImage";

export const Projects = () => {
  return (
    <div id="projects">
      <div className={Styles.outContainer}>
        {/* MENU */}
        {/* <div className={Styles.navBorder}>
          <nav className={Styles.nav}>
            <ul>
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* MENU */}
        <div className={Styles.container}>
          <h1 className={Styles.subTitle}>My Projects</h1>
          {/* <div className={Styles.projectList}>
              <div className={Styles.project}>
                <img src="./assets/projects/work-1.png" />
                <div className={Styles.layer}>
                  <h3>Social Media App</h3>
                  <p>
                    The app connects you to the talented people around the
                    world. Download it from the App Store.
                  </p>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className={Styles.fAIcon}
                      ></FontAwesomeIcon>
                    </i>
                  </a>
                </div>
              </div>
              <div className={Styles.project}>
                <img src="./assets/projects/work-2.png" />
                <div className={Styles.layer}>
                  <h3>Music App</h3>
                  <p>
                    The app connects you to the talented people around the
                    world. Download it from the App Store.
                  </p>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className={Styles.fAIcon}
                      ></FontAwesomeIcon>
                    </i>
                  </a>
                </div>
              </div>
              <div className={Styles.project}>
                <img src="./assets/projects/work-3.png" />
                <div className={Styles.layer}>
                  <h3>Online Shopping App</h3>
                  <p>
                    The app connects you to the talented people around the
                    world. Download it from the App Store.
                  </p>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className={Styles.fAIcon}
                      ></FontAwesomeIcon>
                    </i>
                  </a>
                </div>
              </div>
            </div> */}
          {/* Added */}
          <div className={Styles.projects}>
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
          {/* Added */}
          {/* <a href="#" className={Styles.btn}>
            See More...
          </a> */}
        </div>
      </div>
    </div>
  );
};
