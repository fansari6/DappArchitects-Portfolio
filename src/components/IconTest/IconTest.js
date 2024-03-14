import React from "react";
import SkillImage from "../Helper-Components/SkillImage";
import Styles from "./IconTest.module.css";
import skills from "../data/skills.json";

export const IconTest = () => {
  return (
    <div>
      BISMILLAH
      <div className={Styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={Styles.skill}>
              <div className={Styles.skillImageContainer}>
                <SkillImage imageSrc={skill.imageSrc} alt={skill.title} />
              </div>
              {/* <p>{skill.title}</p> */}
              <div>{skill.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
