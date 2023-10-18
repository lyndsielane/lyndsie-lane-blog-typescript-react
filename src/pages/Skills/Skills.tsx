import "./Skills.scss";
import { html } from "../../assets/images";
import { css } from "../../assets/images";
import { javascript } from "../../assets/images";
import { nodejs } from "../../assets/images";
import { wordpress } from "../../assets/images";
import { react } from "../../assets/images";

function Skills() {
  return (
    <div className="SkillsItem">
      <img src={html} alt="html" />
      <img src={css} alt="css" />
      <img src={javascript} alt="javascript" />
      <img src={nodejs} alt="nodejs" />
      <img src={react} alt="react" />
      <img id="wordpress" src={wordpress} alt="wordpress" />
    </div>
  );
}

export default Skills;
