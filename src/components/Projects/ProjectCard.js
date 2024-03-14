import React, { useState } from "react";
import ProjectImage from "../Helper-Components/ProjectImage";
import Styles from "./ProjectCard.module.css";
// import JsonHover from "./JsonHover";

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    // fulldescription,
    skills,
    demo,
    source,
  },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={Styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={Styles.image}>
        <ProjectImage
          imageSrc={imageSrc}
          alt={title}
          className={`${Styles.imageContainer} rounded-image`}
        />
      </div>
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>
        {isHovered ? (
          <span
            dangerouslySetInnerHTML={{
              __html: description.replace(/\^/g, "<br/><br/>"),
            }}
          />
        ) : (
          <span
            dangerouslySetInnerHTML={{
              __html: description.slice(0, 310).replace(/\^/g, "<br/><br/>"),
            }}
          />
        )}
      </p>

      <ul className={Styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={Styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>

      <div className={Styles.links}>
        <a href={demo} className={Styles.link}>
          Hover to see more...
        </a>
        <a href={source} className={Styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
